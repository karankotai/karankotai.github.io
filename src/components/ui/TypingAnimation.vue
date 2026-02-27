<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  lines: string[]
  speed?: number
  delay?: number
  showCursor?: boolean
}>(), {
  speed: 50,
  delay: 500,
  showCursor: true,
})

const displayedLines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isComplete = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let delayTimer: ReturnType<typeof setTimeout> | null = null

function startTyping() {
  if (currentLineIndex.value >= props.lines.length) {
    isComplete.value = true
    return
  }

  const currentLine = props.lines[currentLineIndex.value]
  if (!currentLine) return

  if (!displayedLines.value[currentLineIndex.value]) {
    displayedLines.value[currentLineIndex.value] = ''
  }

  timer = setInterval(() => {
    if (currentCharIndex.value < currentLine.length) {
      displayedLines.value[currentLineIndex.value] = (displayedLines.value[currentLineIndex.value] ?? '') + currentLine[currentCharIndex.value]
      currentCharIndex.value++
    } else {
      if (timer) clearInterval(timer)
      currentLineIndex.value++
      currentCharIndex.value = 0

      if (currentLineIndex.value < props.lines.length) {
        delayTimer = setTimeout(startTyping, props.delay)
      } else {
        isComplete.value = true
      }
    }
  }, props.speed)
}

onMounted(() => {
  delayTimer = setTimeout(startTyping, props.delay)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (delayTimer) clearTimeout(delayTimer)
})
</script>

<template>
  <div class="font-mono">
    <div v-for="(line, index) in displayedLines" :key="index" class="leading-relaxed">
      <span>{{ line }}</span>
      <span
        v-if="showCursor && index === currentLineIndex && !isComplete"
        class="inline-block w-2.5 h-5 bg-terminal-green dark:bg-terminal-green bg-light-green ml-0.5 align-middle animate-blink"
      ></span>
    </div>
    <span
      v-if="showCursor && isComplete"
      class="inline-block w-2.5 h-5 bg-terminal-green dark:bg-terminal-green bg-light-green ml-0.5 align-middle animate-blink"
    ></span>
  </div>
</template>
