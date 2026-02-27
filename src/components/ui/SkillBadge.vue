<script setup lang="ts">
defineProps<{
  name: string
  delay?: number
}>()
</script>

<template>
  <span
    class="inline-block px-3 py-1.5 text-sm border rounded font-mono
      dark:border-border-primary dark:text-terminal-green dark:bg-bg-surface-hover
      border-light-border text-light-green bg-light-surface
      hover:dark:border-terminal-green/50 hover:border-light-green/50
      hover:dark:shadow-[0_0_10px_rgba(0,255,65,0.15)] hover:shadow-[0_0_10px_rgba(5,150,105,0.15)]
      transition-all duration-300"
    :style="{ transitionDelay: `${delay || 0}ms` }"
  >
    {{ name }}
  </span>
</template>
