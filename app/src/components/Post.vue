<template>
  <div>
    <div class="card my-card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img src="/tmp-1-1662412083487" alt="Placeholder image" />
        </figure>
      </div>
      <div class="icons-container">
        <div class="icon-btn" @click="commentsModal">
          <span class="material-icons-outlined"> mode_comment </span>
          <span>Comment</span>
        </div>
        <div class="icon-btn like" @click="handleColor">
          <span class="material-icons-outlined"> favorite_border </span>
          <span>Like</span>
        </div>
      </div>
    </div>
    <CommentsModal @commentsModal="commentsModal" />
  </div>
</template>

<script>
import CommentsModal from './CommentsModal.vue'
export default {
  data() {
    return {
      likeColor: 'black',
    }
  },
  methods: {
    handleColor() {
      this.likeColor = '#EB5757'
    },
    commentsModal() {
      this.$el.querySelector('.comments-modal').classList.toggle('is-active')
    },
  },
  components: { CommentsModal },
}
</script>

<style scoped>
.my-card {
  max-width: 600px;
}
.icons-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2px;
}
.icon-btn {
  padding: 5px 20px;
  display: flex;
  place-content: center;
  border-radius: 8px;
  gap: 10px;
  cursor: pointer;
}
.icon-btn:hover {
  background: #f2f2f2;
}
.icon-btn.like {
  color: v-bind(likeColor);
}
</style>
