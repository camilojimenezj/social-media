<template>
  <div class="notification is-primary is-light">
    <button class="delete" @click="handleDelete"></button>
    {{ GStore.successMessage }}
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
  methods: {
    handleDelete() {
      this.GStore.successMessage = ''
    },
  },
}
</script>

<style scoped></style>
