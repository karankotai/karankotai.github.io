import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const isSubmitting = ref(false)
  const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
  const statusMessage = ref('')

  async function sendEmail(form: HTMLFormElement) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      submitStatus.value = 'error'
      statusMessage.value = 'EmailJS not configured. Please set environment variables.'
      return
    }

    isSubmitting.value = true
    submitStatus.value = 'idle'

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      submitStatus.value = 'success'
      statusMessage.value = 'Message sent successfully! I\'ll get back to you soon.'
      form.reset()
    } catch {
      submitStatus.value = 'error'
      statusMessage.value = 'Failed to send message. Please try again or email me directly.'
    } finally {
      isSubmitting.value = false
    }
  }

  return { isSubmitting, submitStatus, statusMessage, sendEmail }
}
