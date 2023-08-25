<script setup lang="ts">
const emit = defineEmits<{
  (e: 'restart'): void
}>()
</script>

<template>
  <header>
    <span>Виселица</span>
    <button @click="emit('restart')">Новая игра</button>
  </header>
  <p>Отгадайте имя - введите букву</p>
</template>
