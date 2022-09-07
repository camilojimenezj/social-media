<template>
  <form class="box my-container" @submit="handleSubmit">
    <div class="title">Log in</div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="Text input"
          name="email"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input"
          type="password"
          placeholder="Text input"
          name="password"
          required
        />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { loginUser } from '../services/login'
export default {
  inject: ['GStore'],
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const user = {
        email: e.target.email.value,
        password: e.target.password.value,
      }
      loginUser(user)
        .then((res) => {
          localStorage.setItem('loggedSocialMediaUser', JSON.stringify(res))
          this.GStore.session = res
          this.GStore.successMessage = 'Successfully logged in'
          setTimeout(() => {
            this.GStore.successMessage = ''
          }, 3000)
          e.target.reset()
          this.$router.push('/')
        })
        .catch((err) => {
          this.GStore.errorMessage = 'Invalid email or password'
          setTimeout(() => {
            this.GStore.errorMessage = ''
          }, 3000)
          e.target.reset()
          console.error(err)
        })
    },
  },
}
</script>

<style scoped>
.my-container {
  max-width: 600px;
  margin: 150px auto;
  padding: 25px;
}
</style>
