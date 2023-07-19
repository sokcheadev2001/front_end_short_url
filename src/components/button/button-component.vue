<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  className: String,
  text: String,
  type: String as PropType<'submit' | 'button' | 'reset'>
})
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-40"
    :class="className"
    :type="type"
  >
    {{ text }}
  </button>
</template>
