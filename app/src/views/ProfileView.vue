<template>
  <div class="my-container" v-if="userData">
    <ProfileInfo :userData="userData" @profileModal="profileModal" />
    <Post
      v-for="post in userData.posts"
      :key="post.id"
      :post="post"
      :defaultImg="userData.img"
    />
    <ProfileModal
      :userData="userData"
      @profileModal="profileModal"
      @setUserData="(data) => setUserData(data)"
    />
  </div>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue'
import Post from '../components/Post.vue'
import ProfileModal from '../components/ProfileModal.vue'
import { getAUser } from '../services/users'
export default {
  components: { ProfileInfo, Post, ProfileModal },
  inject: ['GStore'],
  data() {
    return {
      userData: null,
    }
  },
  methods: {
    profileModal() {
      this.$el.querySelector('.profile-modal').classList.toggle('is-active')
    },
    setUserData(data) {
      this.userData = data
    },
  },
  created() {
    const id = this.GStore.session.id
    getAUser(id).then((res) => {
      this.userData = res
    })
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
