<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img
          class="is-rounded"
          :src="user.img || 'https://bulma.io/images/placeholders/96x96.png'"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="media-content">
      <p
        class="title is-4 username"
        @click="
          () =>
            this.$router.push({
              name: 'other',
              params: { id: user.id },
            })
        "
      >
        {{ user?.name }}
      </p>
      <p class="subtitle is-6">@{{ user?.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.username {
  cursor: pointer;
}
</style>
