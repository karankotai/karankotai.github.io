<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { experiences } from '@/data/experience'
</script>

<template>
  <section id="experience" class="py-20 sm:py-28 px-4">
    <div class="max-w-3xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="git-log.txt" />

        <div class="mb-4 text-sm dark:text-text-muted text-light-text-secondary">
          <span class="dark:text-terminal-green text-light-green">$</span>
          <span class="ml-2">git log --graph --oneline --all</span>
        </div>
      </div>

      <div>
        <div
          v-for="(exp, index) in experiences"
          :key="exp.hash"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 150,
              duration: 400,
            }
          }"
        >
          <TimelineItem :experience="exp" :index="index" />
        </div>
      </div>
    </div>
  </section>
</template>
