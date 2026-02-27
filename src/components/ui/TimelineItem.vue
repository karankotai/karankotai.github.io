<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{
  experience: Experience
  index: number
}>()
</script>

<template>
  <div class="relative pl-8 pb-8 last:pb-0">
    <!-- Vertical line -->
    <div class="absolute left-3 top-0 bottom-0 w-px dark:bg-terminal-green/30 bg-light-green/30"></div>
    <!-- Dot -->
    <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full dark:bg-terminal-green bg-light-green ring-4 dark:ring-bg-primary ring-light-bg"></div>

    <div class="dark:bg-bg-surface bg-light-surface border dark:border-border-primary border-light-border rounded-lg p-4 sm:p-5">
      <!-- Commit header -->
      <div class="flex flex-wrap items-center gap-2 mb-2 text-sm">
        <span class="dark:text-terminal-yellow text-amber-600 font-bold">commit</span>
        <span class="dark:text-terminal-green text-light-green">{{ experience.hash }}</span>
      </div>

      <h3 class="text-base sm:text-lg font-bold dark:text-text-primary text-light-text">
        {{ experience.role }}
      </h3>
      <p class="text-sm dark:text-terminal-cyan text-teal-600 mb-1">
        {{ experience.company }}
      </p>
      <p class="text-xs dark:text-text-muted text-light-text-secondary mb-3">
        {{ experience.period }}
      </p>

      <ul class="space-y-1.5">
        <li
          v-for="(achievement, i) in experience.achievements"
          :key="i"
          class="text-sm dark:text-text-secondary text-light-text-secondary flex items-start gap-2"
        >
          <span class="dark:text-terminal-green text-light-green mt-0.5 shrink-0">+</span>
          <span>{{ achievement }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
