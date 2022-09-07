<template>
  <form class="box my-container" @submit="handleSubmit">
    <div class="title">Sign in</div>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          name="name"
          required
        />
      </div>
    </div>

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

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          I agree to the <a href="#">terms and conditions</a>
        </label>
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
import { registerUser } from '../services/users'
export default {
  inject: ['GStore'],
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const newUser = {
        email: e.target.email.value,
        name: e.target.name.value,
        password: e.target.password.value,
      }
      registerUser(newUser)
        .then((res) => {
          e.target.reset()
          this.GStore.successMessage = 'Successfully registered'
          setTimeout(() => {
            this.GStore.successMessage = ''
          }, 3000)
          this.$router.push('/login')
        })
        .catch((err) => {
          this.GStore.errorMessage = 'Invalid email'
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
  margin: 120px auto;
  padding: 25px;
}
</style>
