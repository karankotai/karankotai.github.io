<script setup lang="ts">
import type { BlogPost } from '@/types'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <a
    :href="post.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block dark:bg-bg-surface bg-light-surface border dark:border-border-primary border-light-border rounded-lg p-5 sm:p-6
      hover:dark:border-terminal-green/50 hover:border-light-green/50
      hover:dark:shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_15px_rgba(5,150,105,0.1)]
      transition-all duration-300 group"
  >
    <!-- Command-style title -->
    <div class="mb-3">
      <span class="dark:text-terminal-green text-light-green text-sm">$</span>
      <span class="dark:text-terminal-cyan text-teal-600 text-sm ml-1">cat</span>
      <span class="dark:text-text-primary text-light-text text-sm ml-1 group-hover:underline">{{ post.title.toLowerCase().replace(/\s+/g, '-') }}.md</span>
    </div>

    <h3 class="text-base font-bold dark:text-text-primary text-light-text mb-2">
      {{ post.title }}
    </h3>

    <p class="text-sm dark:text-text-secondary text-light-text-secondary leading-relaxed mb-3">
      {{ post.description }}
    </p>

    <div class="flex flex-wrap items-center gap-2">
      <span class="text-xs dark:text-text-muted text-light-text-secondary">{{ post.date }}</span>
      <span class="dark:text-text-muted text-light-text-secondary">|</span>
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="text-xs px-2 py-0.5 rounded dark:bg-terminal-green/10 dark:text-terminal-green bg-light-green/10 text-light-green"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>
