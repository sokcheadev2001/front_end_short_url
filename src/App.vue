<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="bg-white border border-b-gray-200">
      <div class="container mx-auto py-5 flex justify-between items-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
        <div class="wrapper">
          <nav class="">
            <RouterLink to="/" class="p-5">Home</RouterLink>
            <RouterLink to="/about" class="p-5">About</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="container mx-auto">
    <main class="max-w-3xl mx-auto py-16">
      <RouterView />
    </main>
  </div>
</template>
