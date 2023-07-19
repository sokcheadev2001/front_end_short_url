<script setup lang="ts">
defineProps({
  className: String,
  type: String,
  name: String,
  placeholder: String,
  value: String,
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

// fixing event.target can be null error ts
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :class="className"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
  />
</template>
