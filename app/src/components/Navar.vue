<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <RouterLink to="/">
          <img src="../assets/media-logo.svg" width="112" height="28" />
        </RouterLink>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"><RouterLink to="/"> Home </RouterLink></a>
        <a class="navbar-item"
          ><RouterLink to="/explore"> Explore </RouterLink></a
        >
        <a class="navbar-item"
          ><RouterLink to="/profile"> Profile </RouterLink></a
        >
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">
              <RouterLink to="/signup"><strong>Sign up</strong></RouterLink>
            </a>
            <a class="button is-light"
              ><RouterLink to="/login"> Log in </RouterLink></a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink },
}
</script>

<style lang="scss" scoped></style>
