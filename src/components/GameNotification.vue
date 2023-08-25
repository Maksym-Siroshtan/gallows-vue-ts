<script setup lang="ts">
import { ref } from 'vue'
const isVisible = ref(false)

const openNotification = () => {
  isVisible.value = true
}

const closeNotification = () => {
  isVisible.value = false
}

defineExpose({
  openNotification,
  closeNotification
})
</script>

<template>
  <!-- Notification -->
  <div class="notification-container" :class="{ show: isVisible }">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
