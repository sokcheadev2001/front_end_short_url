<script setup lang="ts">
defineProps({
  className: String,
  label: String,
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
  <label
    class="block text-gray-700 text-sm font-bold mb-2"
    v-if="label !== undefined"
    :for="name"
    >{{ label }}</label
  >
  <input
    :class="className"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
  />
</template>
