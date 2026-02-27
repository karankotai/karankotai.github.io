<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BlogCard from '@/components/ui/BlogCard.vue'
import { blogPosts } from '@/data/blog'
</script>

<template>
  <section id="blog" class="py-20 sm:py-28 px-4">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="blog/" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(post, index) in blogPosts"
          :key="post.title"
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
        >
          <BlogCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>
