<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { skillCategories } from '@/data/skills'
</script>

<template>
  <section id="skills" class="py-20 sm:py-28 px-4">
    <div class="max-w-4xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="skills.json" />

        <TerminalWindow title="npm list --depth=0">
          <div class="space-y-6 text-sm sm:text-base">
            <p class="dark:text-text-muted text-light-text-secondary">
              <span class="dark:text-terminal-green text-light-green">karan@portfolio</span>
              <span class="dark:text-text-muted text-light-text-secondary"> /home/karan/skills</span>
            </p>

            <div
              v-for="(category, catIndex) in skillCategories"
              :key="category.category"
            >
              <p class="mb-3">
                <span class="dark:text-terminal-yellow text-amber-600">{{ catIndex === skillCategories.length - 1 ? '└──' : '├──' }}</span>
                <span class="dark:text-terminal-cyan text-teal-600 ml-1 font-bold">{{ category.category }}</span>
              </p>
              <div class="ml-6 flex flex-wrap gap-2">
                <div
                  v-for="(skill, skillIndex) in category.skills"
                  :key="skill.name"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.8 }"
                  :visible-once="{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: (catIndex * 100) + (skillIndex * 80),
                      duration: 300,
                    }
                  }"
                >
                  <SkillBadge :name="skill.name" />
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
