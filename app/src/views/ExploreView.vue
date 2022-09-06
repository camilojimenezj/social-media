<template>
  <div class="my-container">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Search" />
      </div>
      <div class="control">
        <a class="button is-info"> Search </a>
      </div>
    </div>
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
export default { components: { Post } }
</script>

<style scoped>
.my-container {
  width: 600px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.field {
  width: 100%;
}
</style>
