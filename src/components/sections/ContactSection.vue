<script setup lang="ts">
import { ref } from 'vue'
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { useContactForm } from '@/composables/useContactForm'
import { personalInfo } from '@/data/personal'

const formRef = ref<HTMLFormElement>()
const { isSubmitting, submitStatus, statusMessage, sendEmail } = useContactForm()

async function handleSubmit() {
  if (formRef.value) {
    await sendEmail(formRef.value)
  }
}
</script>

<template>
  <section id="contact" class="py-20 sm:py-28 px-4">
    <div class="max-w-3xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <SectionHeading command="contact.sh" />

        <TerminalWindow title="send-message.sh">
          <form ref="formRef" @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Name -->
            <div>
              <label for="user_name" class="block text-sm mb-2">
                <span class="dark:text-terminal-green text-light-green">$</span>
                <span class="dark:text-text-secondary text-light-text-secondary ml-2">Enter your name:</span>
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                autocomplete="name"
                placeholder="John Doe"
                class="w-full px-4 py-2.5 rounded text-sm font-mono
                  dark:bg-bg-primary dark:border-border-primary dark:text-text-primary
                  bg-gray-50 border-light-border text-light-text
                  border focus:outline-none focus:dark:border-terminal-green focus:border-light-green
                  placeholder:dark:text-text-muted placeholder:text-light-text-secondary/50
                  transition-colors"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="user_email" class="block text-sm mb-2">
                <span class="dark:text-terminal-green text-light-green">$</span>
                <span class="dark:text-text-secondary text-light-text-secondary ml-2">Enter your email:</span>
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                autocomplete="email"
                placeholder="john@example.com"
                class="w-full px-4 py-2.5 rounded text-sm font-mono
                  dark:bg-bg-primary dark:border-border-primary dark:text-text-primary
                  bg-gray-50 border-light-border text-light-text
                  border focus:outline-none focus:dark:border-terminal-green focus:border-light-green
                  placeholder:dark:text-text-muted placeholder:text-light-text-secondary/50
                  transition-colors"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm mb-2">
                <span class="dark:text-terminal-green text-light-green">$</span>
                <span class="dark:text-text-secondary text-light-text-secondary ml-2">Enter your message:</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Hey, I'd like to connect..."
                class="w-full px-4 py-2.5 rounded text-sm font-mono resize-y
                  dark:bg-bg-primary dark:border-border-primary dark:text-text-primary
                  bg-gray-50 border-light-border text-light-text
                  border focus:outline-none focus:dark:border-terminal-green focus:border-light-green
                  placeholder:dark:text-text-muted placeholder:text-light-text-secondary/50
                  transition-colors"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-medium
                dark:bg-terminal-green dark:text-bg-primary
                bg-light-green text-white
                dark:hover:bg-terminal-green-dim hover:bg-emerald-700
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors"
            >
              <span>$</span>
              <span v-if="isSubmitting">sending...</span>
              <span v-else>./send-message.sh</span>
            </button>

            <!-- Status message -->
            <div v-if="submitStatus !== 'idle'" class="text-sm font-mono">
              <p v-if="submitStatus === 'success'" class="dark:text-terminal-green text-light-green">
                > {{ statusMessage }}
              </p>
              <p v-else-if="submitStatus === 'error'" class="dark:text-terminal-red text-red-600">
                > Error: {{ statusMessage }}
              </p>
            </div>
          </form>

          <!-- Direct contact info -->
          <div class="mt-8 pt-6 border-t dark:border-border-primary border-light-border">
            <p class="text-sm dark:text-text-muted text-light-text-secondary mb-3">
              <span class="dark:text-terminal-yellow text-amber-600">#</span> Or reach out directly:
            </p>
            <div class="space-y-1 text-sm">
              <p>
                <span class="dark:text-terminal-cyan text-teal-600">email</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
                <a :href="'mailto:' + personalInfo.email" class="dark:text-terminal-green text-light-green hover:underline ml-2">{{ personalInfo.email }}</a>
              </p>
              <p>
                <span class="dark:text-terminal-cyan text-teal-600">phone</span><span class="dark:text-text-muted text-light-text-secondary">:</span>
                <span class="dark:text-text-primary text-light-text ml-2">{{ personalInfo.phone }}</span>
              </p>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
