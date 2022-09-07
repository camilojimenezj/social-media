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
import { getAUser } from './services/users'
export default {
  inject: ['GStore'],
  components: { RouterView, Navbar },
  created() {
    const loggedUserJSON = localStorage.getItem('loggedSocialMediaUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      getAUser(user.id).then((res) => {
        this.GStore.session = res
      })
    } else {
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped></style>
