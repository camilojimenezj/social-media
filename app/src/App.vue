<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navar from './components/Navar.vue'
</script>

<template>
  <div class="container">
    <Navar />
    <main class="my-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
