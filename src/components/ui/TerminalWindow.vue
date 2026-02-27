<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  showDots?: boolean
}>(), {
  title: 'terminal',
  showDots: true,
})
</script>

<template>
  <div class="terminal-window">
    <div class="terminal-titlebar">
      <div v-if="showDots" class="flex gap-2">
        <span class="terminal-dot bg-dot-red"></span>
        <span class="terminal-dot bg-dot-yellow"></span>
        <span class="terminal-dot bg-dot-green"></span>
      </div>
      <span class="text-xs text-text-secondary dark:text-text-secondary text-light-text-secondary ml-2 flex-1 text-center">
        {{ title }}
      </span>
      <div v-if="showDots" class="w-[52px]"></div>
    </div>
    <div class="p-4 sm:p-6">
      <slot />
    </div>
  </div>
</template>
