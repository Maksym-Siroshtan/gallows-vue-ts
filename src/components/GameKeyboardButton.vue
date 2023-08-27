<script setup lang="ts">
interface Props {
  buttonKey: string
}

defineProps<Props>()
</script>

<template>
  <button>
    {{ buttonKey }}
  </button>
</template>
