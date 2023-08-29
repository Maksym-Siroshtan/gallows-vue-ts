<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRandomWord } from './composables/useRandomWord'
import { useLetters } from './composables/useLetters'
import { useNotification } from './composables/useNotification'

import GameHeader from './components/GameHeader.vue'
import GameFigure from './components/GameFigure.vue'
import GameWrongLetters from './components/GameWrongLetters.vue'
import GameWord from './components/GameWord.vue'
import GamePopup from './components/GamePopup.vue'
import GameNotification from './components/GameNotification.vue'
import GameKeyboard from './components/GameKeyboard.vue'

const { word, getRandomWord } = useRandomWord()
const { correctLetters, wrongLetters, addLetters, resetLetters, isHaveLetters } = useLetters(word)
const { notification, showNotification } = useNotification()

const isWin = computed(() => [...word.value].every((x) => correctLetters.value.includes(x)))
const isLose = computed(() => wrongLetters.value.length === 6)
const popup = ref<InstanceType<typeof GamePopup> | null>(null)
/* const restart = async () => {
  await getRandomWord()
  getRandomWord()
  resetLetters()
  popup.value?.closePopup()
} */
const restart = () => {
  getRandomWord()
  resetLetters()
  popup.value?.closePopup()
}

watch(correctLetters, () => {
  if (isWin.value) {
    popup.value?.openPopup('win')
  }
})

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value?.openPopup('lose')
  }
})

window.addEventListener('keydown', ({ key }) => {
  if (isWin.value || isLose.value) {
    return
  }

  if (isHaveLetters(key)) {
    showNotification()
    return
  }
  addLetters(key)
})

function clickOnKey(key: string) {
  if (isHaveLetters(key)) {
    showNotification()
    return
  }
  addLetters(key)
}
</script>

<template>
  <GameHeader @restart="restart" />

  <div class="game-container">
    <div class="game-main-container">
      <GameFigure :wrong-letters-count="wrongLetters.length" />
      <GameWrongLetters :wrong-letters="wrongLetters" />
    </div>
    <GameKeyboard @click-on-key="clickOnKey" />
    <GameWord :word="word" :correct-letters="correctLetters" />
  </div>

  <GamePopup ref="popup" :word="word" @restart="restart" />

  <GameNotification ref="notification" />
</template>
