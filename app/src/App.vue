<template>
  <Navbar />
  <div class="container">
    <main class="my-main">
      <RouterView />
    </main>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
export default {
  components: { RouterView, Navbar },
}
</script>

<style scoped></style>
