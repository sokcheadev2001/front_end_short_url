<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="bg-green-500 py-2 text-white rounded-md">
    <RouterLink to="/register" class="p-5">My urls</RouterLink>
    <RouterLink to="/register" class="p-5">Sign Up</RouterLink>
    <RouterLink to="/login" class="p-5">Sign In</RouterLink>
  </nav>
</template>
