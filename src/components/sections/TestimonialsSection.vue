<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'
import { testimonials } from '@/data/testimonials'
</script>

<template>
  <section id="testimonials" class="py-20 sm:py-28 px-4">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="reviews.md" />

        <p class="mb-8 text-sm dark:text-text-muted text-light-text-secondary">
          <span class="dark:text-terminal-green text-light-green">$</span>
          <span class="ml-2">gh pr list --state merged --reviewer all</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 120,
              duration: 400,
            }
          }"
        >
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </div>
    </div>
  </section>
</template>
