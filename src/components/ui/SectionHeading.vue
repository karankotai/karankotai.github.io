<script setup lang="ts">
defineProps<{
  command: string
}>()
</script>

<template>
  <div class="mb-8 sm:mb-12">
    <h2 class="text-lg sm:text-xl font-bold">
      <span class="text-terminal-green dark:text-terminal-green text-light-green">$</span>
      <span class="text-terminal-cyan dark:text-terminal-cyan text-light-green ml-2">cat</span>
      <span class="text-text-primary dark:text-text-primary text-light-text ml-2">{{ command }}</span>
    </h2>
    <div class="mt-2 h-px bg-gradient-to-r from-terminal-green/50 dark:from-terminal-green/50 from-light-green/50 to-transparent"></div>
  </div>
</template>
