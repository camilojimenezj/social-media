<template>
  <div class="my-container">
    <ProfileInfo @profileModal="profileModal" />
    <Post />
    <ProfileModal @profileModal="profileModal" />
  </div>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue'
import Post from '../components/Post.vue'
import ProfileModal from '../components/ProfileModal.vue'
export default {
  components: { ProfileInfo, Post, ProfileModal },
  data() {
    return {}
  },
  methods: {
    profileModal() {
      this.$el.querySelector('.profile-modal').classList.toggle('is-active')
    },
  },
}
</script>

<style scoped>
.my-container {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
</style>
