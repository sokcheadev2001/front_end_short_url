<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import Input from '@/components/form-input/input-component.vue'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
import { user } from '@/shared/user/user'
import router from '@/router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

if (user.token) router.push('/')

const userData = reactive({
  username: '',
  email: '',
  password: ''
})

const rules = {
  username: { required, minLength: minLength(4) },
  email: { required, email },
  password: { required, minLength: minLength(8) }
}

const v$ = useVuelidate(rules, userData)

async function submit() {
  try {
    const validated = await v$.value.$validate()
    if (validated) {
      const response = await fetch(import.meta.env.VITE_API_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password
        })
      })
      if (response.ok === true) {
        const data = await response.json()
        localStorage.setItem('token', JSON.stringify(data.accessToken))
        router.push('/')
      }
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md">
    <form @submit.prevent="submit">
      <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Login to Your Account</h1>
      <div class="mb-4">
        <Input
          label="Your Username"
          type="text"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="username"
          placeholder="Enter your username"
          v-model="userData.username"
        />
        <span class="text-red-600" v-for="err in v$.username.$errors" :key="err.$uid">
          {{ err.$message }}
        </span>
      </div>
      <div class="mb-4">
        <Input
          label="Your Email"
          type="email"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="email"
          placeholder="Enter your email"
          v-model="userData.email"
        />
        <span class="text-red-600" v-for="err in v$.email.$errors" :key="err.$uid">
          {{ err.$message }}
        </span>
      </div>
      <div class="mb-4">
        <Input
          label="Your Password"
          type="password"
          className="rounded-md w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="password"
          placeholder="Enter your password"
          v-model="userData.password"
        />
        <span class="text-red-600" v-for="err in v$.password.$errors" :key="err.$uid">
          {{ err.$message }}
        </span>
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
        <RouterLink to="/login" class="font-semibold text-green-600 hover:text-green-700"
          >Sign In</RouterLink
        >
      </div>
    </form>
  </div>
</template>
