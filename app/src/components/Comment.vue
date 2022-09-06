<template>
  <div class="media">
    <div class="media-left">
      <figure class="image">
        <div
          class="user-image"
          :style="{ backgroundImage: `url(${userImg})` }"
        ></div>
      </figure>
    </div>
    <div class="media-content">
      <p class="subtitle is-6">{{ userData?.name }}</p>
      <p>
        {{ comment.content }}
      </p>
    </div>
  </div>
</template>

<script>
import { getAUser } from '../services/users'
export default {
  props: {
    comment: {
      type: Object,
    },
  },
  data() {
    return {
      userData: null,
    }
  },
  computed: {
    userImg() {
      return (
        this.userData?.img || 'https://bulma.io/images/placeholders/96x96.png'
      )
    },
  },
  created() {
    const id = this.comment.userId
    getAUser(id).then((res) => {
      this.userData = res
    })
  },
}
</script>

<style scoped>
.user-image {
  width: 48px;
  height: 48px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
