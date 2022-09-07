<template>
  <div class="notification is-warning is-light">
    <button class="delete" @click="handleDelete"></button>
    {{ GStore.errorMessage }}
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
  methods: {
    handleDelete() {
      this.GStore.errorMessage = ''
    },
  },
}
</script>

<style scoped></style>
