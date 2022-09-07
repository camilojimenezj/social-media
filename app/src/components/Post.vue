<template>
  <div>
    <div class="card my-card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <div
                class="user-image"
                :style="{ backgroundImage: `url(${userImg})` }"
              ></div>
            </figure>
          </div>
          <div class="media-content">
            <p
              class="title is-4 username"
              @click="
                () =>
                  this.$router.push({
                    name: 'other',
                    params: { id: post.user.id },
                  })
              "
            >
              {{ post.user?.name || defaultUser?.name }}
            </p>
            <p class="subtitle is-6">
              @{{ post.user?.name || defaultUser?.name }}
            </p>
          </div>
        </div>

        <div class="content">
          {{ post.content }}
          <br />
          <time class="time" datetime="2016-1-1">{{ dateString }}</time>
        </div>
      </div>
      <div class="card-image" v-if="post.img">
        <figure class="image">
          <img :src="post.img" alt="Placeholder image" />
        </figure>
      </div>
      <div class="icons-container">
        <div class="icon-btn" @click="commentsModal">
          <span class="material-icons-outlined"> mode_comment </span>
          <span>Comment</span>
        </div>
        <div class="icon-btn like" @click="handleLike">
          <span class="material-icons-outlined"> favorite_border </span>
          <span>Like</span>
          <span class="likes-count">{{ likeCount }}</span>
        </div>
      </div>
    </div>
    <CommentsModal
      @commentsModal="commentsModal"
      :post="post"
      :defaultImg="defaultUser?.img"
    />
  </div>
</template>

<script>
import CommentsModal from './CommentsModal.vue'
import { toggleLike } from '../services/posts'
import moment from 'moment'
export default {
  components: { CommentsModal },
  inject: ['GStore'],
  props: {
    post: {
      type: Object,
    },
    defaultUser: {
      type: Object,
    },
  },
  data() {
    return {
      like: false,
      likeCount: this.post.likes.length,
    }
  },
  methods: {
    handleLike() {
      if (this.like) {
        toggleLike(this.post.id, this.GStore.session.id, '-').then((res) => {
          this.likeCount--
        })
      } else {
        toggleLike(this.post.id, this.GStore.session.id, '+').then((res) => {
          this.likeCount++
        })
      }
      this.like = !this.like
    },
    commentsModal() {
      this.$el.querySelector('.comments-modal').classList.toggle('is-active')
    },
  },
  computed: {
    dateString() {
      const date = this.post.date
      const momentDate = moment(date).fromNow()
      const newDate = new Date(date)

      return momentDate
    },
    userImg() {
      return (
        this.post.user?.img ||
        this.defaultUser?.img ||
        'https://bulma.io/images/placeholders/96x96.png'
      )
    },
    likeColor() {
      return this.like ? '#EB5757' : 'black'
    },
  },
  created() {
    let userId = this.GStore.session.id
    if (this.post.likes.some((id) => id == userId)) {
      this.like = true
    }
  },
}
</script>

<style scoped>
.my-card {
  width: 600px;
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
  user-select: none;
}
.username {
  cursor: pointer;
}
.user-image {
  width: 48px;
  height: 48px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.likes-count {
  font-size: 12px;
}
.time {
  color: rgba(66, 75, 135, 0.737);
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .my-card {
    width: 100vw;
  }
}
</style>
