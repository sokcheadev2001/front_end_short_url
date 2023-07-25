<script setup lang="ts">
import Button from '@/components/button/button-component.vue'
import { copyText } from '@/helper/clipboard'
import { user } from '@/shared/user/user'
import { onMounted, ref } from 'vue'
import { LinkIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid'
import SkeletonLoader from '@/components/skeleton/skeleton-loader.vue'
const urls = ref()
const isLoading = ref(false)
onMounted(async () => {
  const response = await fetch(import.meta.env.VITE_API_URL + '/links/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `Bearer ${user.token}`
    }
  })
  if (response.ok === true) {
    isLoading.value = true
    const data = await response.json()
    urls.value = data
  }
})

function goToUrl(url: string) {
  window.open(url, '_blank')
}
const base_url = import.meta.env.VITE_API_URL
</script>

<template>
  <div class="bg-white shadow-md p-8 rounded-md mb-10">
    <h1 class="text-4xl font-bold mb-5 text-center text-green-600">Your recent Shorten URLS</h1>
    <div class="mb-4" v-if="isLoading === true">
      <div v-for="url in urls" :key="url.id" class="border p-6 mb-3 flex rounded-md">
        <div class="mr-2 mt-1">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
        </div>
        <div class="flex-1">
          <div class="font-bold text-base">{{ base_url + '/' + url.short_url }}</div>
          <a :href="url.long_url" class="text-green-600 text-xs"> {{ url.long_url }}</a>
          <div class="flex gap-3">
            <Button
              className="rounded-md mt-4 w-32 bg-blue-500 hover:bg-blue-700"
              text="Copy"
              type="button"
              @click="goToUrl(base_url + '/' + url.short_url)"
            >
              <i> <LinkIcon class="w-6 inline" /> </i> <span>Visit</span>
            </Button>

            <Button
              className="rounded-md mt-4 w-32"
              text="Copy"
              type="button"
              @click="copyText(base_url + '/' + url.short_url)"
            >
              <i> <ClipboardDocumentCheckIcon class="w-6 inline" /> </i> <span>Copy</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4" v-else>
      <div v-for="index in 6" :key="index" class="border p-6 mb-3 flex rounded-md">
        <div class="mr-2 mt-1">
          <SkeletonLoader
            type="circle"
            class="w-10 h-10 flex justify-center items-center text-gray-400"
          >
            Icon
          </SkeletonLoader>
        </div>

        <div class="flex-1">
          <SkeletonLoader class="h-2.5 w-56 mb-4" />
          <SkeletonLoader class="h-2 mb-4" />
          <SkeletonLoader class="h-2 mb-4" />
        </div>
      </div>
    </div>
  </div>
</template>
