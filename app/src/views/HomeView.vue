<template>
  <div class="my-container">
    <Upload></Upload>
    <Post></Post>
    <Post></Post>
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import Upload from '../components/Upload.vue'
export default {
  components: { Post, Upload },
  inject: ['GStore'],
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
