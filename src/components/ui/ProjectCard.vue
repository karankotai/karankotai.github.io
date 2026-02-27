<script setup lang="ts">
import type { Project } from '@/types'
import TerminalWindow from './TerminalWindow.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <TerminalWindow :title="project.title.toLowerCase().replace(/\s+/g, '-') + '.sh'">
    <div class="space-y-3">
      <p class="text-text-secondary dark:text-text-secondary text-light-text-secondary text-sm leading-relaxed">
        <span class="text-terminal-yellow dark:text-terminal-yellow text-amber-600">#</span>
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="text-xs px-2 py-0.5 rounded
            dark:bg-terminal-green/10 dark:text-terminal-green dark:border dark:border-terminal-green/20
            bg-light-green/10 text-light-green border border-light-green/20"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex gap-4 pt-2 text-sm">
        <a
          :href="project.live"
          target="_blank"
          rel="noopener noreferrer"
          class="terminal-prompt hover:underline dark:text-terminal-green text-light-green"
        >
          ./demo
        </a>
        <a
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="dark:text-terminal-cyan text-teal-600 hover:underline"
        >
          git clone
        </a>
      </div>
    </div>
  </TerminalWindow>
</template>
