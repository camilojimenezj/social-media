<template>
  <div>
    <div class="box">
      <div class="top">
        <figure class="image is-128x128">
          <div
            class="user-image"
            :style="{ backgroundImage: `url(${userImg})` }"
          ></div>
        </figure>
        <div class="username">
          <div class="title is-4">{{ userData.name }}</div>
          <button v-if="!notEdit" class="button" @click="$emit('profileModal')">
            Edit profile
          </button>
        </div>
      </div>
      <div class="description">{{ userData.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
    },
    notEdit: {
      type: Boolean,
    },
  },
  computed: {
    userImg() {
      return (
        this.userData.img || 'https://bulma.io/images/placeholders/96x96.png'
      )
    },
  },
}
</script>

<style scoped>
.box {
  width: 600px;
}
.top {
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
}
.user-image {
  width: 128px;
  height: 128px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 700px) {
  .box {
    width: 100vw;
  }
}
</style>
