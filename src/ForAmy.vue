<script setup>
import { ref } from 'vue'
import { initTheme, toggleTheme } from './theme.js'

const isDark = ref(initTheme())
function onToggle() {
  isDark.value = toggleTheme()
}

// Tiny copy-to-clipboard helper for the command / example cards.
const copied = ref('')
function copy(text, id) {
  navigator.clipboard?.writeText(text)
  copied.value = id
  setTimeout(() => {
    if (copied.value === id) copied.value = ''
  }, 1500)
}

const exampleMessage = `Hey Claude, I'm doing another grant. Here's the URL: https://example.org/grants/apply — can you use the Chrome MCP dev tools and pull all the options from the form into a text file here?`
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-150">
    <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="flex justify-between items-start">
        <span class="text-sm text-[var(--text-muted)]">Notes from the call</span>
        <button
          @click="onToggle"
          class="text-sm cursor-pointer px-2 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </div>

      <h1 class="mt-4 text-3xl font-bold sm:text-4xl">Hey Amy 👋</h1>
      <p class="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
        Here are the notes from the call. If you want to experiment on your own tonight, here's what
        you can do.
      </p>

      <!-- What we're fixing -->
      <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-5 leading-relaxed">
        <h2 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">What we're fixing</h2>
        <p class="mt-2 text-[var(--text-primary)]">
          Right now you're using the Chrome DevTools to manually copy and paste stuff from the grant
          page into Google Sheets — or from the grant page into a local text file where you clean it
          up and then populate Google Sheets. I think you can use <strong>Claude Code</strong> to
          greatly automate that process.
        </p>
      </div>

      <!-- What's done -->
      <div class="mt-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-5">
        <h2 class="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Here's what we just did</h2>
        <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
          You don't have to install or set up anything. On the call we:
        </p>
        <ul class="mt-3 space-y-2 text-sm text-[var(--text-primary)]">
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Installed Homebrew.</span></li>
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Installed Claude Code.</span></li>
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Connected Claude Code to your company account.</span></li>
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Gave it the Chrome MCP DevTools so it can use the browser.</span></li>
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Gave it a folder where it can get work done.</span></li>
          <li class="flex gap-2"><span class="text-emerald-600 dark:text-emerald-400">✓</span><span>Left it a note about who you are and what you do.</span></li>
        </ul>
        <p class="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
          So everything below is just <em>using</em> it.
        </p>
      </div>

      <!-- Vocabulary -->
      <div class="mt-10">
        <h2 class="text-2xl font-bold">Two words that aren't as scary as they sound</h2>
        <p class="mt-3 text-[var(--text-secondary)] leading-relaxed">
          You'll be typing into an app called the <strong>Terminal</strong> — a window where you type
          a command and press Enter. Two pieces of vocabulary:
        </p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-4">
            <code class="font-mono text-[var(--text-primary)] font-semibold">cd</code>
            <span class="ml-2 text-xs text-[var(--text-muted)]">"change directory"</span>
            <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              "Directory" is a fancy word for <strong>folder</strong>. <code class="font-mono">cd</code> means
              "go into a folder." You type <code class="font-mono">cd</code>, a space, then the folder's name.
            </p>
          </div>
          <div class="rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-4">
            <code class="font-mono text-[var(--text-primary)] font-semibold">claude</code>
            <span class="ml-2 text-xs text-[var(--text-muted)]">starts your helper</span>
            <p class="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              Typing <code class="font-mono">claude</code> and pressing Enter starts Claude Code right
              there in the window. After that, you talk to it in plain English.
            </p>
          </div>
        </div>
      </div>

      <!-- The steps -->
      <h2 class="mt-12 text-2xl font-bold">Step by step</h2>
      <p class="mt-2 text-[var(--text-secondary)] leading-relaxed">
        Do these in order. The first time it'll feel slow; after a couple of grants it's automatic.
      </p>

      <ol class="mt-6 space-y-5">
        <!-- Step 1 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">1</span>
            <h3 class="text-lg font-semibold">Open the Terminal app</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Hold down <kbd class="kbd">⌘ Command</kbd> and tap <kbd class="kbd">Space</kbd>. A little
              search box pops up in the middle of the screen. Type <strong>ter</strong> — the
              <strong>Terminal</strong> app shows up at the top. Press <kbd class="kbd">Enter</kbd>.
            </p>
            <p class="mt-2 text-sm text-[var(--text-muted)]">
              A plain window opens with some text and a blinking cursor. That's the Terminal. It always
              starts in your "home" folder.
            </p>
          </div>
        </li>

        <!-- Step 2 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">2</span>
            <h3 class="text-lg font-semibold">Go into the Claude folder</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>This is exactly what you type, then press <kbd class="kbd">Enter</kbd>:</p>
            <button @click="copy('cd ClaudeCode', 'cd')" class="cmd-card">
              <code class="font-mono">cd ClaudeCode</code>
              <span class="cmd-copy">{{ copied === 'cd' ? 'Copied!' : 'Copy' }}</span>
            </button>
            <p class="mt-3 text-sm text-[var(--text-muted)]">
              Careful with the capital letters: big <strong>C</strong>laude, big <strong>C</strong>ode,
              all one word with no space in the middle. There's a space after
              <code class="font-mono">cd</code>, and that's the only space.
            </p>
            <p class="mt-2 text-sm text-[var(--text-muted)]">
              Tip: type <code class="font-mono">cd Cl</code> and press the <kbd class="kbd">Tab</kbd>
              key — the Terminal finishes the name for you.
            </p>
          </div>
        </li>

        <!-- Step 3 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">3</span>
            <h3 class="text-lg font-semibold">Start Claude</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>Type this and press <kbd class="kbd">Enter</kbd>:</p>
            <button @click="copy('claude', 'claude')" class="cmd-card">
              <code class="font-mono">claude</code>
              <span class="cmd-copy">{{ copied === 'claude' ? 'Copied!' : 'Copy' }}</span>
            </button>
            <p class="mt-3 text-sm text-[var(--text-muted)]">
              The window changes and you get a box to type into. You're now talking to Claude — from
              here on, just write what you want in plain English.
            </p>
          </div>
        </li>

        <!-- Step 4 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">4</span>
            <h3 class="text-lg font-semibold">Ask it to do the work</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Just tell it what you want, in your own words. You don't need fancy instructions. For
              example, you might type something like:
            </p>
            <div class="mt-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-alt)] overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 border-b border-[var(--border-light)]">
                <span class="text-xs uppercase tracking-wide text-[var(--text-muted)]">Example message</span>
                <button
                  @click="copy(exampleMessage, 'example')"
                  class="text-xs px-2 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                >{{ copied === 'example' ? 'Copied!' : 'Copy' }}</button>
              </div>
              <pre class="px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap text-[var(--text-secondary)] font-mono">{{ exampleMessage }}</pre>
            </div>
            <p class="mt-3 text-sm text-[var(--text-muted)]">
              Swap in the real grant URL. Word it however feels natural — it understands plain English.
              Claude will open the page, find the dropdowns, and write the options into a text file for
              you, then tell you what it found.
            </p>
          </div>
        </li>

        <!-- Step 5 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">5</span>
            <h3 class="text-lg font-semibold">About permissions</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Claude Code asks permission before it does things, because Claude can do just about
              anything on your computer. When it asks, you have a few choices:
            </p>
            <ul class="mt-3 space-y-2">
              <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span><strong>Yes</strong> — allow it this one time.</span></li>
              <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span><strong>Yes, and don't ask again</strong> — allow it, and stop asking for that kind of action from now on.</span></li>
              <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span><strong>No</strong> — don't do it.</span></li>
            </ul>
            <p class="mt-3">
              If you get tired of approving things, you can start Claude in a mode that never asks. Instead
              of typing <code class="font-mono">claude</code>, type:
            </p>
            <button @click="copy('claude --dangerously-skip-permissions', 'skip')" class="cmd-card">
              <code class="font-mono">claude --dangerously-skip-permissions</code>
              <span class="cmd-copy">{{ copied === 'skip' ? 'Copied!' : 'Copy' }}</span>
            </button>
            <p class="mt-3 text-sm text-[var(--text-muted)]">
              In that mode it does whatever it decides to, no questions asked. If it's ever doing
              something you don't want, press <kbd class="kbd">Control</kbd> + <kbd class="kbd">C</kbd>
              to stop it. It's handy once you trust it; use your judgment.
            </p>
          </div>
        </li>

        <!-- Step 6 -->
        <li class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-bold text-sm">6</span>
            <h3 class="text-lg font-semibold">Grab the file, drop it into your sheet</h3>
          </div>
          <div class="mt-3 pl-11 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Open <strong>Finder</strong>. In the sidebar on the left you'll see
              <strong>ClaudeCode</strong> — I pinned it there near Downloads and Desktop. Click it, and
              inside you'll find the folder Claude made for the grant, with the text file in it.
              Double-click to read it, check it looks right, then copy it into your Google Sheet.
            </p>
          </div>
        </li>
      </ol>

      <!-- What else Claude can do -->
      <div class="mt-12 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface-alt)] p-6 leading-relaxed">
        <h2 class="text-xl font-bold">What else Claude can do</h2>
        <p class="mt-3 text-[var(--text-secondary)]">
          It's not limited to plain text files. Because it's running right inside your
          <code class="font-mono">ClaudeCode</code> folder, it can do basically anything you could do
          by hand — you just tell it what you want. A few examples:
        </p>
        <ul class="mt-3 space-y-2 text-[var(--text-secondary)]">
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Save results however you like: a <strong>CSV</strong> (opens straight into a spreadsheet), a plain <strong>.txt</strong> file, a <strong>Markdown</strong> file (nicely formatted text), or even a diagram.</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Make folders and organize them — one folder per grant, files named and moved however you want.</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Take a <strong>screenshot</strong> — the whole page or just one part of it. Anything you can do in a Chrome browser, it can do too.</span></li>
        </ul>
        <p class="mt-3 text-[var(--text-secondary)]">
          You don't have to remember any of this. Just describe what you want in plain English and let
          it figure out the how.
        </p>
      </div>

      <!-- The CLAUDE.md note -->
      <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-6 leading-relaxed">
        <h2 class="text-xl font-bold">Make it smarter: the note I left it</h2>
        <p class="mt-3 text-[var(--text-secondary)]">
          Inside the <code class="font-mono">ClaudeCode</code> folder there's a file called
          <code class="font-mono">CLAUDE.md</code>. Every time you start Claude in that folder, it reads
          this file first to remind itself who you are and what you're doing. I put a starter note in
          there, but <strong>you know this job better than I do.</strong>
        </p>
        <p class="mt-3 text-[var(--text-secondary)]">
          The most valuable thing you can do is improve that note. Easiest way: while Claude is running,
          just tell it in plain English — for example:
        </p>
        <ul class="mt-3 space-y-2 text-[var(--text-secondary)]">
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>"Here are the kinds of sites I work with, and what a 'grant' means for us…"</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>"Here's exactly what a finished file should look like — match this every time."</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>"For each new grant, make a folder named after it and keep that grant's files inside."</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>"Please update your CLAUDE.md note so you remember all this next time."</span></li>
        </ul>
        <p class="mt-3 text-[var(--text-secondary)]">
          Give it one real, finished example and it'll copy that shape from then on.
        </p>
      </div>

      <!-- Reassurance -->
      <div class="mt-8 rounded-lg border border-[var(--border-light)] bg-[var(--bg-surface)] p-6 leading-relaxed">
        <h2 class="text-xl font-bold">If you get stuck</h2>
        <ul class="mt-3 space-y-2 text-[var(--text-secondary)]">
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span><strong>Nothing you type can break the computer.</strong> Worst case, close the window and open it again.</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Lost in the Terminal? Close the window, reopen it with ⌘+Space → "ter", and start again from Step 2.</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Claude did something weird? Just tell it, in the same window: "that's not what I wanted, here's what I actually need…" It'll adjust.</span></li>
          <li class="flex gap-2"><span class="text-[var(--text-muted)]">•</span><span>Still stuck? <strong>Text me a screenshot.</strong> A photo of the screen is perfect — I'll tell you exactly what to type next.</span></li>
        </ul>
      </div>

      <footer class="mt-12 text-center text-xs text-[var(--text-muted)]">
        Notes from the call. Text me if anything's confusing.
      </footer>
    </div>
  </div>
</template>

<style scoped>
.kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.8em;
  padding: 0.1em 0.45em;
  border-radius: 0.35em;
  border: 1px solid var(--border);
  background: var(--bg-surface-alt);
  color: var(--text-primary);
  white-space: nowrap;
}
.cmd-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--bg-surface-alt);
  cursor: pointer;
  text-align: left;
}
.cmd-card code {
  font-size: 1.05rem;
  color: var(--text-primary);
  overflow-wrap: anywhere;
}
.cmd-copy {
  flex-shrink: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid var(--border);
}
.cmd-card:hover .cmd-copy {
  color: var(--text-primary);
}
</style>
