---
name: deploy-static-to-s3
description: Cheat sheet for deploying the cultural-shift-graphs static build (or any static HTML bundle) to an S3 website bucket fronted by a Route 53 alias record. Use when Jason says "deploy", "push it live", "ship it to S3", or similar.
---

# deploy-static-to-s3

Cheat sheet for getting a Vite static build (or any plain HTML bundle) onto an S3 bucket + a Route 53 custom domain. Not a script. Read it, understand what each step does, and then do whatever makes sense for the situation in front of you. If the defaults don't fit — improvise. If a step is already done idempotently, skip it.

The defaults below are what currently works for this project (cultural-shift-graphs). Other setups are fine; this is the beaten path, not a cage.

## What this produces

A public, HTTP (not HTTPS) static site at `http://<domain>/`, served from an S3 bucket whose name exactly matches the domain, with a Route 53 A-alias pointing the domain at the S3 website endpoint. Multi-page — every `<subdir>/index.html` in the build becomes a live path like `http://<domain>/<subdir>/`.

HTTPS is out of scope for this skill. Graduating to HTTPS means adding CloudFront + an ACM cert in `us-east-1`. Do that as a separate, bigger task when Jason asks for it.

## Prerequisites (check, don't assume)

- AWS CLI is installed and `aws sts get-caller-identity` works. Jason usually has creds loaded as environment variables — don't touch `~/.aws/credentials` unless asked.
- Node/npm are installed and `npm run build` produces a `dist/` folder.
- Route 53 already hosts the target domain as a hosted zone. If it doesn't, you're in a different situation than this skill covers — stop and ask.
- The target region is `us-east-1` by default. Any region works; just pick the matching website-endpoint hosted zone ID below.

## The recipe (seven steps, idempotent)

Use `UPSERT` for DNS and `s3 sync` for files so re-running is safe.

### 1. Build the static bundle

```bash
npm run build
```

Check that `dist/` contains every expected `<slug>/index.html`. If it's missing a page, the Vite config's `build.rollupOptions.input` probably forgot that entry — fix that before deploying.

### 2. Pick the bucket name — it MUST equal the domain

For the Route 53 → S3 website alias to route cleanly, the bucket name has to be identical to the full domain: `test.surgicalsledgehammer.com`, `graphs.surgicalsledgehammer.com`, whatever. This is an AWS constraint, not a preference. If you name the bucket anything else, the alias silently won't work.

```bash
aws s3api create-bucket --bucket <domain> --region us-east-1
```

If the bucket already exists and is yours, that's fine — skip this step.

### 3. Turn off Block Public Access on the bucket

New buckets have all four BPA flags on by default, which silently nullifies any public-read policy. Turn them all off:

```bash
aws s3api put-public-access-block \
  --bucket <domain> \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### 4. Attach a public-read bucket policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<domain>/*"
    }
  ]
}
```

```bash
aws s3api put-bucket-policy --bucket <domain> --policy file://bucket-policy.json
```

### 5. Enable static website hosting

```bash
aws s3 website s3://<domain>/ --index-document index.html --error-document index.html
```

Pointing `error-document` at `index.html` means unknown paths render the landing page. For a multi-page site that's usually fine; build a real `404.html` later if Jason wants one.

### 6. Upload the build

Use `sync --delete` so removed pages actually disappear from the bucket:

```bash
aws s3 sync dist/ s3://<domain>/ --delete
```

HTML content-types are usually set correctly by `sync`, but if you ever hit a page that downloads instead of renders, check that `.html` files have `Content-Type: text/html`. `aws s3 cp --content-type text/html` forces it.

### 7. Point the domain at the S3 website endpoint (Route 53 alias)

The S3 website endpoints have **fixed**, **per-region** hosted zone IDs baked into AWS. They are not the hosted zone ID of the bucket, and they don't change per bucket. Use the table below. Full reference: https://docs.aws.amazon.com/general/latest/gr/s3.html

| Region      | DNSName                            | HostedZoneId     |
|-------------|------------------------------------|------------------|
| us-east-1   | `s3-website-us-east-1.amazonaws.com`   | `Z3AQBSTGFYJSTF` |
| us-east-2   | `s3-website.us-east-2.amazonaws.com`   | `Z2O1EMRO9K5GLX` |
| us-west-1   | `s3-website-us-west-1.amazonaws.com`   | `Z2F56UZL2M1ACD` |
| us-west-2   | `s3-website-us-west-2.amazonaws.com`   | `Z3BJ6K6RIION7M` |
| eu-west-1   | `s3-website-eu-west-1.amazonaws.com`   | `Z1BKCTXD74EZPE` |
| ap-northeast-1 | `s3-website-ap-northeast-1.amazonaws.com` | `Z2M4EHUR26P7ZW` |

Create a change batch file:

```json
{
  "Comment": "Alias <domain> -> S3 website endpoint",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "<domain>.",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z3AQBSTGFYJSTF",
          "DNSName": "s3-website-us-east-1.amazonaws.com.",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
```

Apply it, then wait for INSYNC:

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id <parent-zone-id> \
  --change-batch file://route53-change.json

aws route53 wait resource-record-sets-changed --id <change-id-from-response>
```

Typical propagation time: 30-90s.

### 8. Verify

```bash
curl -sI http://<domain>/
```

Should return `200 OK` with `Server: AmazonS3`. For richer verification, open it in Chrome via `chrome-devtools` MCP and screenshot. Hit `/` AND at least one of the subpath routes — if `/` works but `/<slug>/` 404s, the `<slug>/index.html` probably wasn't in the build.

## Known values for cultural-shift-graphs

Use these if the task doesn't say otherwise:

- **Smoke-test domain**: `test.surgicalsledgehammer.com` (currently deployed)
- **Parent Route 53 zone ID**: `Z10415082P0LS0WZ3YOBG` (for `surgicalsledgehammer.com`)
- **Region**: `us-east-1`
- **S3 website HostedZoneId**: `Z3AQBSTGFYJSTF`
- **Bucket policy**: public-read (see step 4 above)

Production domain is still TBD. When Jason picks it, the sub/root distinction may matter:
- Subdomain (`graphs.surgicalsledgehammer.com`) → just add a new bucket + alias record. Straightforward.
- Root apex (`surgicalsledgehammer.com`) → alias works on the zone apex in Route 53, but the existing apex is already in use; coordinate with Jason before overwriting.

## Improvise zone (when the defaults don't fit)

The recipe above is optimized for "I have a new domain and want a static site there". If the situation is different, don't force it:

- **Already deployed, just pushing updates?** Steps 1 and 6 are all you need. Don't re-create the bucket, don't re-apply the policy, don't touch DNS.
- **Root index is stale after a new page was added?** Re-run `npm run build` and sync — the new `index.html` will overwrite the old one. If Jason's root `index.html` is hand-curated (lists graphs explicitly), make sure to update the `src/App.vue` listing first.
- **Bucket name clash in some other account?** S3 bucket names are globally unique. Pick a subdomain that avoids the collision or tell Jason.
- **DNS change hangs on PENDING forever?** Usually means a typo in the change batch. `aws route53 get-change --id ...` will show it.
- **HTTPS needed?** Stop. That's CloudFront + ACM territory. Tell Jason and ask whether to do it now or defer.
- **Custom error pages / redirects / index fallback for SPAs?** S3 website hosting supports basic redirect rules via `aws s3api put-bucket-website` with a full website-config JSON. Read the docs before going down that path.
- **Multiple sub-bundles from one build?** Nothing stops you from running the sync twice into two different buckets. They're just folders.

## When to use this skill

- Jason says "deploy" or "ship it" or "put it live" and the project is a static-HTML build.
- You just finished a new graph page and the obvious next step is getting it public.
- You need to run the 7-step recipe and don't want to re-derive the tricky bits (bucket-name-must-equal-domain, BPA defaults, which hosted zone ID to use).

## When NOT to use this skill

- The project has a backend, server-side rendering, or anything that's not pure static files.
- Jason wants HTTPS — this skill deliberately doesn't cover it. That's a separate, larger task.
- You're in an account you don't have permission to touch, or domains aren't in Route 53.
- You're deploying somewhere that isn't AWS — this entire cheat sheet is AWS-specific.

## Related

- `friction.md` in the project root has the original "I learned this the hard way" notes that fed this skill. Check there first if something surprising happens.
- `CLAUDE.md` in the project root has the broader deploy philosophy and the research workflow that precedes deploys.
