<template>
  <div class="modal comments-modal">
    <div class="modal-background" @click="$emit('commentsModal')"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="card">
        <div class="card-content">
          <form class="media" @submit="handleSubmit">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  class="is-rounded"
                  :src="userImg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="field my-textarea">
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  name="content"
                  placeholder="Comment"
                ></textarea>
              </div>
            </div>
            <button class="button">Send</button>
          </form>
          <Comment
            v-for="comment in oderComments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>
      <!-- Any other Bulma elements you want -->
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('commentsModal')"
    ></button>
  </div>
</template>

<script>
import { addComment } from '../services/posts'
import Comment from './Comment.vue'

export default {
  inject: ['GStore'],
  props: {
    post: {
      type: Object,
    },
    defaultImg: {
      type: String,
    },
  },
  components: { Comment },
  data() {
    return {
      postArr: this.post,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const postId = this.postArr.id
      const userId = this.GStore.session.id
      console.log(userId)
      const content = e.target.content.value
      addComment(postId, { content, userId }).then((res) => {
        e.target.reset()
        this.postArr = res
      })
    },
  },
  components: { Comment },
  computed: {
    userImg() {
      return (
        this.post.user?.img ||
        this.defaultImg ||
        'https://bulma.io/images/placeholders/96x96.png'
      )
    },
    oderComments() {
      return this.postArr.comments.reverse()
    },
  },
}
</script>

<style scoped>
.my-textarea {
  width: 100%;
  margin: 0 10px;
}
</style>
