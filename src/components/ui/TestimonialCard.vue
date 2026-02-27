<script setup lang="ts">
import type { Testimonial } from '@/types'

defineProps<{
  testimonial: Testimonial
}>()
</script>

<template>
  <div class="dark:bg-bg-surface bg-light-surface border dark:border-border-primary border-light-border rounded-lg p-5 sm:p-6">
    <!-- PR review header -->
    <div class="flex items-center gap-2 mb-4">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full dark:bg-terminal-green/20 bg-light-green/20">
        <span class="dark:text-terminal-green text-light-green text-sm font-bold">&#10003;</span>
      </span>
      <span class="text-sm dark:text-terminal-green text-light-green font-medium">approved</span>
    </div>

    <!-- Quote -->
    <blockquote class="text-sm dark:text-text-secondary text-light-text-secondary leading-relaxed mb-4 italic">
      "{{ testimonial.text }}"
    </blockquote>

    <!-- Author -->
    <div class="flex items-center gap-3 pt-3 border-t dark:border-border-primary border-light-border">
      <div class="w-8 h-8 rounded-full dark:bg-terminal-green/20 bg-light-green/20 flex items-center justify-center">
        <span class="dark:text-terminal-green text-light-green text-sm font-bold">
          {{ testimonial.name[0] }}
        </span>
      </div>
      <div>
        <p class="text-sm font-medium dark:text-text-primary text-light-text">{{ testimonial.name }}</p>
        <p class="text-xs dark:text-text-muted text-light-text-secondary">{{ testimonial.role }} @ {{ testimonial.company }}</p>
      </div>
    </div>
  </div>
</template>
