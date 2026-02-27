import { useDark, useToggle } from '@vueuse/core'

export function useDarkMode() {
  const isDark = useDark({
    initialValue: 'dark',
    storageKey: 'vueuse-color-scheme',
  })
  const toggleDark = useToggle(isDark)

  return { isDark, toggleDark }
}
