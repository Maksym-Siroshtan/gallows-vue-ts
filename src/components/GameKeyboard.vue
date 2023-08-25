<script setup lang="ts">
interface Props {
  keyboardRowTop: string[]
  keyboardRowMiddle: string[]
  keyboardRowBottom: string[]
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'clickOnKey', key: string): void
}>()
</script>

<template>
  <div class="keyboard">
    <div class="keyboard__row">
      <button
        v-for="(key, index) in keyboardRowTop"
        :key="`${key}${index}`"
        @click="emit('clickOnKey', key)"
      >
        {{ key }}
      </button>
    </div>
    <div class="keyboard__row">
      <button
        v-for="(key, index) in keyboardRowMiddle"
        :key="`${key}${index}`"
        @click="emit('clickOnKey', key)"
      >
        {{ key }}
      </button>
    </div>
    <div class="keyboard__row">
      <button
        v-for="(key, index) in keyboardRowBottom"
        :key="`${key}${index}`"
        @click="emit('clickOnKey', key)"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>
