<script setup lang="ts">
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import { personalInfo } from '@/data/personal'

const terminalLines = [
  `$ whoami`,
  `> ${personalInfo.name}`,
  `$ cat title.txt`,
  `> ${personalInfo.title}`,
  `$ echo $TRAITS`,
  `> ${personalInfo.traits.join(' | ')}`,
]
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-14">
    <div class="max-w-3xl w-full">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <!-- ASCII art tagline -->
        <pre class="dark:text-terminal-green text-light-green text-[8px] sm:text-[10px] md:text-xs leading-tight mb-6 overflow-x-auto">
 _____            _                        __        ___
| ____|_ __   __ _(_)_ __   ___  ___ _ __   \ \      / / |__   ___
|  _| | '_ \ / _` | | '_ \ / _ \/ _ \ '__|   \ \ /\ / /| '_ \ / _ \
| |___| | | | (_| | | | | |  __/  __/ |       \ V  V / | | | | (_) |
|_____|_| |_|\__, |_|_| |_|\___|\___|_|        \_/\_/  |_| |_|\___/
  ____  _    |___/         ____                _            _
 / ___|| |__ (_)_ __  ___  |  _ \ _ __ ___   __| |_   _  ___| |_ ___
 \___ \| '_ \| | '_ \/ __| | |_) | '__/ _ \ / _` | | | |/ __| __/ __|
  ___) | | | | | |_) \__ \ |  __/| | | (_) | (_| | |_| | (__| |_\__ \
 |____/|_| |_|_| .__/|___/ |_|   |_|  \___/ \__,_|\__,_|\___|\__|___/
               |_|
        </pre>

        <TerminalWindow title="karan@portfolio:~">
          <TypingAnimation
            :lines="terminalLines"
            :speed="35"
            :delay="400"
            class="text-sm sm:text-base"
          />
        </TerminalWindow>

        <!-- CTA buttons -->
        <div class="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded border
              dark:border-terminal-green dark:text-terminal-green
              border-light-green text-light-green
              dark:hover:bg-terminal-green/10 hover:bg-light-green/10
              transition-colors"
          >
            <span class="dark:text-terminal-green text-light-green">$</span> git clone --profile
          </a>
          <a
            :href="personalInfo.resume"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded
              dark:bg-terminal-green dark:text-bg-primary
              bg-light-green text-white
              dark:hover:bg-terminal-green-dim hover:bg-emerald-700
              transition-colors font-medium"
          >
            <span>$</span> cat resume.pdf
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 flex justify-center">
        <div class="flex flex-col items-center gap-2 dark:text-text-muted text-light-text-secondary text-xs animate-bounce">
          <span>scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
