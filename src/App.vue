<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
// import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
// import BlogSection from '@/components/sections/BlogSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <!-- <TestimonialsSection /> -->
    <!-- <BlogSection /> -->
    <ContactSection />
  </main>
  <TheFooter />
</template>
