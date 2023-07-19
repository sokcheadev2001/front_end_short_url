<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import Input from '@/components/form-input/input-component.vue'

import { ref } from 'vue'

function submit() {
  alert(short_url.value)
}
const short_url = ref('')
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md mb-10">
    <form @submit.prevent="submit">
      <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Shorten your link</h1>
      <div class="mb-4 flex">
        <!-- <input
          type="text"
          class="w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="short_url"
          placeholder="Enter long url here"
          v-model="short_url"
        /> -->
        <Input
          type="text"
          className="w-full bg-gray-200 appearance-none border-2 border-gray-200 py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          name="short_url"
          placeholder="Enter long url here"
          v-model="short_url"
        />
        <Button text="Shorten Url" type="submit" />
      </div>
    </form>
    <p class="mt-4 text-center max-w-xl mx-auto">
      ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to
      create a shortened link making it easy to share
    </p>
  </div>
</template>
