<template>
  <div class="my-container">
    <ProfileInfo @handleModal="handleModal" />
    <Post />
    <Modal v-if="modalActive" @handleModal="handleModal" />
  </div>
</template>

<script>
import ProfileInfo from '../components/ProfileInfo.vue'
import Post from '../components/Post.vue'
import Modal from '../components/Modal.vue'
export default {
  components: { ProfileInfo, Post, Modal },
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    handleModal() {
      this.modalActive = !this.modalActive
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
