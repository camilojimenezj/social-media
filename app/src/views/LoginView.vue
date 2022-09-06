<template>
  <form class="box my-container">
    <div class="title">Log in</div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="Text input" required />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input"
          type="password"
          placeholder="Text input"
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
export default {}
</script>

<style scoped>
.my-container {
  max-width: 600px;
  margin: 150px auto;
  padding: 25px;
}
</style>
