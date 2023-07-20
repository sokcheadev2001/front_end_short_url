<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { removeToken, user } from '@/shared/user/user'
import router from '@/router'

function handleLogout() {
  removeToken()
  router.push('/')
}
</script>
<template>
  <nav class="bg-green-500 py-2 text-white rounded-md">
    <RouterLink to="/myurl" class="p-5">My urls</RouterLink>
    <a v-on:click="handleLogout" v-if="user.token" class="p-5 cursor-pointer">Logout</a>
    <RouterLink to="/register" v-if="!user.token" class="p-5">Sign Up</RouterLink>
    <RouterLink to="/login" v-if="!user.token" class="p-5">Sign In</RouterLink>
  </nav>
</template>
