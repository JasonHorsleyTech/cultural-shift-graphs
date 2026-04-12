# Friction Log

Running list of friction points hit while doing work that's likely to be repeated. Candidates for automation, skills, or just a short doc to re-read next time.

## AWS / Route 53

### Hosted zones outlive domain registrations (2026-04-11)

**Friction:** "Which of my domains are actually usable?" is not a one-command answer. `aws route53 list-hosted-zones` returns everything, including zones for domains whose registration has expired. `aws route53domains list-domains` only shows domains registered *via Route 53 Domains* — if you registered somewhere else (Namecheap, Google Domains, etc.), it won't show up, so you can't just diff the two lists.

To actually determine usability I had to, for each hosted zone:
1. Query public DNS (`dig @8.8.8.8 +short NS <domain>`) to see if delegation is live
2. For the ones that came back empty, `whois -h whois.verisign-grs.com <domain>` to confirm the registration itself lapsed

On Jason's account, 4 of 9 hosted zones turned out to be orphans: `cs-chess.com`, `planorskip.com`, `thomashorsleybirthdayparty.com`, `terriblecomponentlibrary.com`, `jasonhorsleytech.com` (5 — confirmed expired via Verisign whois).

**Optimization idea:** a `list-usable-domains` skill or script that does the diff automatically and prints a clean table of {zone, registered?, delegation-live?, root-record-type}. Also would be nice to garbage-collect the orphan zones (they cost ~$0.50/mo each).

### macOS `whois` hits IANA, not the registry (2026-04-11)

**Friction:** Default `whois foo.com` on macOS queries IANA first and prints the TLD-level record ("here's the .COM registry, go ask them"), not the actual domain registration record. Easy to mistake the IANA response for "no data" since it doesn't mention the domain at all.

**Fix:** Always use `whois -h whois.verisign-grs.com <domain>` for .com / .net domains to hit Verisign directly. `.org` is `whois.publicinterestregistry.net`. Should probably wrap this in a tiny `domain-whois` helper that picks the right server based on TLD.

### S3 static website deploy to a custom domain — full checklist (2026-04-11)

**Friction:** Deploying a static HTML file to `subdomain.example.com` via S3 website hosting + Route 53 alias is ~7 steps and each one has a subtle gotcha. Worth turning into a skill. The recipe that worked:

1. **Create bucket with the exact domain name.** For Route 53 → S3 website alias to work, the bucket name MUST match the domain (`test.surgicalsledgehammer.com`). If you pick any other name, the alias silently won't route.
2. **Disable Block Public Access** on the bucket — new buckets enable it by default, and the bucket policy will be silently ignored until it's off. `aws s3api put-public-access-block --bucket X --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"`.
3. **Put a public-read bucket policy** allowing `s3:GetObject` on `arn:aws:s3:::BUCKET/*` to `Principal: "*"`. Attach with `aws s3api put-bucket-policy`.
4. **Enable website hosting** with `aws s3 website s3://BUCKET/ --index-document index.html --error-document index.html`.
5. **Upload files** — use `--content-type text/html` explicitly when uploading HTML via `aws s3 cp`, otherwise it can get uploaded as `application/octet-stream` and the browser will download it instead of rendering it. (This didn't bite me on this round but is a classic.)
6. **Create Route 53 A alias** in the parent zone. Hardcoded hosted zone IDs for S3 website endpoints by region (these are NOT the bucket's hosted zone ID — they're fixed AWS constants per region):
   - us-east-1: `Z3AQBSTGFYJSTF`, DNSName `s3-website-us-east-1.amazonaws.com.`
   - us-west-2: `Z3BJ6K6RIION7M`, DNSName `s3-website-us-west-2.amazonaws.com.`
   - eu-west-1: `Z1BKCTXD74EZPE`, DNSName `s3-website-eu-west-1.amazonaws.com.`
   - (full list: https://docs.aws.amazon.com/general/latest/gr/s3.html)
   Use `UPSERT` action in the change batch so the skill is idempotent.
7. **Wait for INSYNC** with `aws route53 wait resource-record-sets-changed --id <change-id>`. Usually ~30-60s.

**Gotchas hit or avoided:**
- `aws s3 website` (CLI v2) took the command with `--error-document index.html` even though that's a single-page smoke test; it would 404 gracefully for any other path. Fine for a test, may want a real 404.html later.
- HTTP only — no HTTPS. To get HTTPS on a custom domain you need CloudFront + ACM cert (in us-east-1 regardless of bucket region) + another alias hop. Not doing that yet for the smoke test, but deploy skill should eventually graduate to that.
- Browsers will increasingly flag plain-HTTP sites. HSTS preloads are not a problem since the domain is new to this use.

**Skill to build:** `deploy-static-to-s3` that takes `{domain, parent_zone_id, region, source_dir}` and runs all 7 steps idempotently. Should also print the final URL and a `curl -I` check.

## Chart libraries

### RoughViz gotchas (2026-04-11)

Using `rough-viz` (v2.0.5) for the xkcd-style sketchy charts. Three non-obvious things:

1. **Named exports, not what you'd guess.** The exports are `Bar`, `BarH`, `Line`, `Donut`, `Pie`, `Scatter`, `StackedBar`, `Force`, `Network` — NOT `RoughBarChart` / `RoughBar` / etc. I guessed wrong on the import name and burned a reload. Correct: `import { Bar } from 'rough-viz'` then `new Bar({...})`.

2. **`width` / `height` config options are lies.** In the constructor you can pass `width: 720, height: 420` but `initChartValues()` throws them away and instead reads `getBoundingClientRect()` of the target element. If your container has no CSS size, the chart silently renders with `width/height = 0 - margin.{left,right}/{top,bottom}`, which produces negative SVG `<rect>` heights and a fistful of "attribute height: A negative value is not valid" console errors. Fix: size the container element via CSS (`class="w-[720px] h-[420px]"` in Tailwind). The constructor numbers don't help.

3. **Inline data ignores `labels`/`values` string args.** When `typeof config.data === 'object'`, the constructor hardcodes `this.labels = "labels"` and `this.values = "values"` regardless of what you pass in config. Your data object MUST have those exact keys: `{ labels: [...], values: [...] }`. Passing `labels: 'decade', values: 'score'` in the config is silently ignored for inline data — those props only matter when reading from a CSV file.

4. **Peer deps pull in vulnerable `d3-color < 3.1.0`** (ReDoS — GHSA-36jr-mh4h-2g58). No fix available upstream. Not exploitable in a static site with hardcoded data (no attacker-controlled input to `d3-color`), so ignoring for this project. Would matter if we ever accepted user-supplied color strings.

### HMR + imperative DOM libraries (2026-04-11)

When a Vue component uses `onMounted()` to imperatively mount a RoughViz chart into a `#chart` div, Vite HMR updates to the template replace the DOM but don't re-run `onMounted`, so the chart blanks out until a full page reload. Not a production issue (builds are fine), but editing a chart component in dev requires a manual refresh to see the chart again.

**Workarounds if it gets annoying:**
- Move chart creation into a `watch` on the data / a key prop
- Use Vite's `import.meta.hot.dispose()` to tear down and re-create on hot update
- Or add `if (import.meta.hot) import.meta.hot.invalidate()` at the bottom of the chart component file to force a full reload on any change — simplest option, works fine for this project


