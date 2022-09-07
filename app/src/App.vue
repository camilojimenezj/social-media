<template>
  <div>
    <Navbar />
    <NotificationSuccess v-if="GStore.successMessage" />
    <NotificationError v-if="GStore.errorMessage" />
    <div class="container">
      <main class="my-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { getAUser } from './services/users'
import NotificationError from './components/NotificationError.vue'
import NotificationSuccess from './components/NotificationSuccess.vue'
export default {
  inject: ['GStore'],
  components: {
    RouterView,
    Navbar,
    Notification,
    NotificationError,
    NotificationSuccess,
  },
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
