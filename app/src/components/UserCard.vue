<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <div
          class="user-image"
          :style="{
            backgroundImage: `url(${
              user.img || 'https://bulma.io/images/placeholders/96x96.png'
            })`,
          }"
        ></div>
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
.user-image {
  width: 48px;
  height: 48px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
