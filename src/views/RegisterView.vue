<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import Input from '@/components/form-input/input-component.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { user } from '@/shared/user/user'
import router from '@/router'

if (user) router.push('/')

async function submit() {
  try {
    if (email.value === '' || password.value === '') {
      errors.value.push({ error: 'Email and password are required' })
      return
    }
    const response = await fetch(import.meta.env.VITE_API_URL + '/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
    if (response.ok === true) {
      const data = await response.json()
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = '/'
      email.value = ''
      password.value = ''
    }
  } catch (error) {
    console.log(error)
  }
}
const username = ref('')
const email = ref('')
const password = ref('')
const errors = ref()
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md mb-10">
    <form @submit.prevent="submit">
      <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Login to Your Account</h1>
      <div class="mb-4">
        <Input
          label="Your Username"
          type="text"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="username"
          placeholder="Enter your username"
          v-model="username"
        />
      </div>
      <div class="mb-4">
        <Input
          label="Your Email"
          type="email"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="email"
          placeholder="Enter your email"
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
        className="mt-4 mb-4 rounded-md outline-1 outline-gray-50 py-4 w-full"
        text="Login"
        type="submit"
      />
      <div class="mb-4 flex text-center justify-center gap-2">
        <div class="flex items-center">
          <span>Already have an account?</span>
        </div>
        <RouterLink to="/register" class="font-semibold text-green-600 hover:text-green-700"
          >Sign In</RouterLink
        >
      </div>
    </form>
  </div>
</template>
