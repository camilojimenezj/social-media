<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img class="is-rounded" :src="userImg" alt="Placeholder image" />
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

<style scoped></style>
