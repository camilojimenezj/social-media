<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="../assets/media-logo.svg"
          width="112"
          height="28"
          @click="this.$router.push('/')"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="handleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" @click="handleBurger" class="navbar-item">
          Home
        </RouterLink>
        <RouterLink to="/explore" @click="handleBurger" class="navbar-item">
          Explore
        </RouterLink>
        <RouterLink to="/profile" @click="handleBurger" class="navbar-item">
          Profile
        </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink to="/signup" @click="handleBurger" class="button">
              <strong>Sign up</strong>
            </RouterLink>
            <RouterLink
              to="/login"
              class="button is-light"
              v-if="!this.GStore.session"
              @click="handleBurger"
            >
              Log in
            </RouterLink>
            <RouterLink
              to="/login"
              class="button is-light"
              v-if="this.GStore.session"
              @click="handleLogout"
            >
              Log out
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  inject: ['GStore'],
  components: { RouterLink },
  methods: {
    handleLogout() {
      localStorage.removeItem('loggedSocialMediaUser')
      this.handleBurger()
      location.reload()
    },
    handleBurger() {
      this.$el.querySelector('.navbar-burger').classList.toggle('is-active')
      this.$el.querySelector('.navbar-menu').classList.toggle('is-active')
    },
  },
}
</script>

<style scoped></style>
