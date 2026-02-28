<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" class="py-20 sm:py-28 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="projects/" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 100,
              duration: 400,
            }
          }"
          class="hover:-translate-y-1 transition-transform duration-300"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
