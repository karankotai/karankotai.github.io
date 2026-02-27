<script setup lang="ts">
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { personalInfo } from '@/data/personal'
</script>

<template>
  <section id="about" class="py-20 sm:py-28 px-4">
    <div class="max-w-4xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="about.yml" />

        <TerminalWindow title="about.yml">
          <div class="text-sm sm:text-base space-y-2 leading-relaxed">
            <p>
              <span class="dark:text-terminal-cyan text-teal-600">name</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <span class="dark:text-terminal-yellow text-amber-600 ml-2">"{{ personalInfo.name }}"</span>
            </p>
            <p>
              <span class="dark:text-terminal-cyan text-teal-600">role</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <span class="dark:text-terminal-yellow text-amber-600 ml-2">"{{ personalInfo.title }}"</span>
            </p>
            <p>
              <span class="dark:text-terminal-cyan text-teal-600">location</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <span class="dark:text-terminal-yellow text-amber-600 ml-2">"{{ personalInfo.location }}"</span>
            </p>
            <p>
              <span class="dark:text-terminal-cyan text-teal-600">email</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <span class="dark:text-terminal-yellow text-amber-600 ml-2">"{{ personalInfo.email }}"</span>
            </p>
            <div class="mt-4">
              <span class="dark:text-terminal-cyan text-teal-600">bio</span><span class="dark:text-text-muted text-light-text-secondary">: |</span>
              <p class="ml-4 mt-1 dark:text-text-secondary text-light-text-secondary">
                {{ personalInfo.bio }}
              </p>
            </div>
            <div class="mt-4">
              <span class="dark:text-terminal-cyan text-teal-600">traits</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <p v-for="trait in personalInfo.traits" :key="trait" class="ml-4">
                <span class="dark:text-terminal-green text-light-green">-</span>
                <span class="dark:text-text-primary text-light-text ml-2">{{ trait }}</span>
              </p>
            </div>
            <div class="mt-4">
              <span class="dark:text-terminal-cyan text-teal-600">links</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
              <p class="ml-4">
                <span class="dark:text-terminal-green text-light-green">-</span>
                <span class="dark:text-text-muted text-light-text-secondary ml-2">github:</span>
                <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer" class="dark:text-terminal-green text-light-green hover:underline ml-1">{{ personalInfo.github }}</a>
              </p>
              <p class="ml-4">
                <span class="dark:text-terminal-green text-light-green">-</span>
                <span class="dark:text-text-muted text-light-text-secondary ml-2">linkedin:</span>
                <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer" class="dark:text-terminal-green text-light-green hover:underline ml-1 break-all">{{ personalInfo.linkedin }}</a>
              </p>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
