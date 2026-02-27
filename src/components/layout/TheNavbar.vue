<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const { isDark, toggleDark } = useDarkMode()
const { activeSection, scrollTo } = useSmoothScroll()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'hero', label: '~' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

function handleNavClick(sectionId: string) {
  scrollTo(sectionId)
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md
      dark:bg-bg-primary/80 bg-light-bg/80
      border-b dark:border-border-primary border-light-border"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <button
          @click="handleNavClick('hero')"
          class="font-bold text-sm dark:text-terminal-green text-light-green hover:opacity-80 transition-opacity"
        >
          karan@dev:~$
        </button>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="handleNavClick(link.id)"
            class="px-3 py-1.5 text-xs rounded transition-colors"
            :class="[
              activeSection === link.id
                ? 'dark:bg-terminal-green/15 dark:text-terminal-green bg-light-green/15 text-light-green'
                : 'dark:text-text-secondary dark:hover:text-terminal-green text-light-text-secondary hover:text-light-green'
            ]"
          >
            {{ link.label }}
          </button>

          <!-- Theme toggle -->
          <button
            @click="toggleDark()"
            class="ml-3 p-2 rounded dark:text-text-secondary text-light-text-secondary
              dark:hover:text-terminal-yellow hover:text-amber-500 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile: theme toggle + hamburger -->
        <div class="flex items-center gap-2 md:hidden">
          <button
            @click="toggleDark()"
            class="p-2 rounded dark:text-text-secondary text-light-text-secondary
              dark:hover:text-terminal-yellow hover:text-amber-500 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 dark:text-text-secondary text-light-text-secondary"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden pb-4 border-t dark:border-border-primary border-light-border mt-2 pt-3"
      >
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="handleNavClick(link.id)"
          class="block w-full text-left px-3 py-2 text-sm rounded transition-colors"
          :class="[
            activeSection === link.id
              ? 'dark:text-terminal-green text-light-green dark:bg-terminal-green/10 bg-light-green/10'
              : 'dark:text-text-secondary text-light-text-secondary'
          ]"
        >
          <span class="dark:text-terminal-green text-light-green mr-1">></span> {{ link.label }}
        </button>
      </div>
    </div>
  </nav>
</template>
