<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/header/navbar-component.vue'
</script>

<template>
  <header>
    <div class="">
      <div class="container mx-auto py-5 flex justify-between items-center">
        <RouterLink to="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
        </RouterLink>
        <div class="wrapper">
          <Navbar />
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
