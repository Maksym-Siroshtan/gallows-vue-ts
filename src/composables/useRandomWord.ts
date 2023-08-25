import { onMounted, ref } from 'vue'
import { getRandomName } from '@/api/getRandomName'

export const useRandomWord = () => {
  const word = ref<string>('')

  const getRandomWord = async () => {
    try {
      const name = await getRandomName()
      word.value = name.toLowerCase()
    } catch (error) {
      console.error('Error...')
    }
  }

  onMounted(() => {
    getRandomWord()
  })

  return {
    word,
    getRandomWord
  }
}
