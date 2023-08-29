import { ref, computed, type Ref } from 'vue'

export const useLetters = (word: Ref<string>) => {
  const letters = ref<string[]>([])
  const correctLetters = computed(() => letters.value.filter((x) => word.value.includes(x)))
  const wrongLetters = computed(() => letters.value.filter((x) => !word.value.includes(x)))
  const addLetters = (key: string) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key)
    }
  }
  const resetLetters = () => {
    letters.value = []
  }
  const isHaveLetters = (key: string) => (letters.value.includes(key) ? true : false)

  return {
    letters,
    correctLetters,
    wrongLetters,
    addLetters,
    resetLetters,
    isHaveLetters
  }
}
