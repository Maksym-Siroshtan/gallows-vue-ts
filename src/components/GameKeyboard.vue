<script setup lang="ts">
import GameKeyboardButton from './GameKeyboardButton.vue'

const keyboard = {
  topRow: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  middleRow: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
  bottomRow: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
}

const emit = defineEmits<{
  (e: 'clickOnKey', key: string): void
}>()
</script>

<template>
  <div class="keyboard">
    <div class="keyboard__row">
      <GameKeyboardButton
        v-for="(key, index) in keyboard.topRow"
        :key="`${key}${index}`"
        :buttonKey="key"
        @click="emit('clickOnKey', key)"
      />
    </div>
    <div class="keyboard__row">
      <GameKeyboardButton
        v-for="(key, index) in keyboard.middleRow"
        :key="`${key}${index}`"
        :buttonKey="key"
        @click="emit('clickOnKey', key)"
      />
    </div>
    <div class="keyboard__row">
      <GameKeyboardButton
        v-for="(key, index) in keyboard.bottomRow"
        :key="`${key}${index}`"
        :buttonKey="key"
        @click="emit('clickOnKey', key)"
      />
    </div>
  </div>
</template>
