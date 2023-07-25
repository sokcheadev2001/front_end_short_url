<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import Input from '@/components/form-input/input-component.vue'
import { user } from '@/shared/user/user'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { computed, ref } from 'vue'
import { toast } from 'vue3-toastify'
import { copyText } from '@/helper/clipboard'

const long_url = ref('')
const short_url = ref('')

const rules = computed(() => ({
  long_url: {
    required,
    $lazy: true
  }
}))

const v$ = useVuelidate(rules, { long_url })

async function submit() {
  try {
    const validated = await v$.value.$validate()
    if (validated) {
      const response = await toast.promise(
        fetch(import.meta.env.VITE_API_URL + '/links', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          },
          body: JSON.stringify({
            long_url: long_url.value
          })
        }),
        {
          pending: 'Please wait...',
          error: 'Something went wrong',
          success: 'Url Shortened Success!'
        }
      )
      if (response.ok === true) {
        const data = await response.json()
        short_url.value = import.meta.env.VITE_API_URL + '/' + data.short_url
        v$.value.$reset()
      }
    }
  } catch (error) {
    console.log(error)
  }
}

function clearUrl() {
  short_url.value = ''
  long_url.value = ''
}
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md mb-10">
    <form @submit.prevent="submit">
      <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Shorten your link</h1>
      <div class="mb-4">
        <div class="flex" v-if="short_url === ''">
          <Input
            type="text"
            className="w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="long_url"
            placeholder="Enter long url here"
            v-model="long_url"
          />
          <Button text="Shorten Url" type="submit" />
        </div>
        <div class="flex" v-else>
          <Input
            type="text"
            className="w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="short_url"
            readonly
            v-model="short_url"
          />
          <Button text="Copy" type="button" @click="copyText(short_url)" />
        </div>
      </div>
      <span class="text-red-600" v-for="err in v$.long_url.$errors" :key="err.$uid">
        {{ err.$message }}
      </span>
      <div class="flex justify-center">
        <Button v-if="short_url !== ''" text="Short another url" type="button" @click="clearUrl" />
      </div>
    </form>
    <p class="mt-4 text-center max-w-xl mx-auto">
      ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to
      create a shortened link making it easy to share
    </p>
  </div>
</template>
