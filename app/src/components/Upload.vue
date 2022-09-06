<template>
  <div>
    <form class="box" @submit="handleSubmit">
      <div class="top">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="userImg" alt="Placeholder image" />
        </figure>
        <div class="control text-container">
          <textarea
            class="textarea has-fixed-size"
            placeholder="What’s happening?"
            name="content"
          ></textarea>
        </div>
      </div>
      <div class="bottom">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="img"
              @input="handleFileChange"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="material-icons-outlined img-upload"> image </i>
              </span>
            </span>
          </label>
        </div>

        <button class="button is-info">Tweet</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAUser } from '../services/users'
import { createPost } from '../services/posts'

export default {
  inject: ['GStore'],
  data() {
    return {
      userData: null,
      file: null,
    }
  },
  methods: {
    handleFileChange(e) {
      this.file = e.target.files[0]
    },
    handleSubmit(e) {
      e.preventDefault()
      const id = this.GStore.session.id
      const formdata = new FormData()
      formdata.append('content', e.target.content.value)
      formdata.append('userId', id)
      if (this.file) formdata.append('img', this.file)
      createPost(formdata).then((res) => {
        console.log(res)
        res.user.name = this.GStore.session.name
        console.log(res)
        this.$emit('setNewPost', res)
        e.target.reset()
      })
    },
  },
  computed: {
    userImg() {
      return (
        this.userData?.img || 'https://bulma.io/images/placeholders/96x96.png'
      )
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
.box {
  width: 600px;
}
.top {
  display: flex;
}
.text-container {
  width: 100%;
  margin: 0 10px;
}
.bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.img-upload {
  font-size: 40px;
  color: #2f81edd9;
  cursor: pointer;
}
</style>
