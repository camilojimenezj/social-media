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
  inject: ['GStore'],
  components: { RouterView, Navbar },
  created() {
    const loggedUserJSON = localStorage.getItem('loggedSocialMediaUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.GStore.session = user
    }
  },
}
</script>

<style scoped></style>
