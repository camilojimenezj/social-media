<template>
  <div class="my-container" v-if="this.GStore.session">
    <Upload @setNewPost="(data) => setNewPost(data)" />
    <Post v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import Upload from '../components/Upload.vue'
import { getAllPosts } from '../services/posts'
export default {
  components: { Post, Upload },
  inject: ['GStore'],
  data() {
    return {
      allPosts: [],
    }
  },
  methods: {
    setNewPost(newPost) {
      this.allPosts.unshift(newPost)
    },
  },
  created() {
    getAllPosts().then((res) => {
      this.allPosts = res.reverse()
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
