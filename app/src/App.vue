<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navar from './components/Navar.vue'
</script>

<template>
  <Navar />
  <div class="container">
    <main class="my-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
