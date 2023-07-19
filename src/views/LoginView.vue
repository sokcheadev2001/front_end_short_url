<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import Input from '@/components/form-input/input-component.vue'

import { ref } from 'vue'

function submit() {
  alert(email.value)
}
const email = ref('')
const password = ref('')
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md mb-10">
    <form @submit.prevent="submit">
      <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Login to Your Account</h1>
      <div class="mb-4">
        <Input
          label="Your Email"
          type="email"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="email"
          placeholder="Enter your password"
          v-model="email"
        />
      </div>
      <div class="mb-4">
        <Input
          label="Your Password"
          type="password"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="password"
          placeholder="Enter your password"
          v-model="password"
        />
      </div>
      <Button
        className="mt-4 rounded-md outline-1 outline-gray-50 py-4 w-full"
        text="Login"
        type="submit"
      />
    </form>
  </div>
</template>
