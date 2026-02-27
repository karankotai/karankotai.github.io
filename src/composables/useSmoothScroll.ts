import { ref, onMounted, onUnmounted } from 'vue'

export function useSmoothScroll() {
  const activeSection = ref('')

  function scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((section) => observer!.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection, scrollTo }
}
