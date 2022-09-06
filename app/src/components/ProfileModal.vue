<template>
  <div class="modal profile-modal">
    <div class="modal-background" @click="$emit('profileModal')"></div>
    <form class="modal-card" @submit="handleSubmit">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit profile</p>
        <button
          class="delete"
          aria-label="close"
          type="button"
          @click="$emit('profileModal')"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              name="description"
              >{{ userData.description }}</textarea
            >
          </div>
        </div>
        <label class="label">Profile image</label>
        <div class="file is-boxed">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="img"
              @input="handleFileChange"
            />
            <span class="file-cta">
              <span class="material-icons-outlined"> file_upload </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-info" type="submit">Save changes</button>
        <button class="button" @click="$emit('profileModal')">Cancel</button>
      </footer>
    </form>
  </div>
</template>

<script>
import { editUser } from '../services/users'
export default {
  inject: ['GStore'],
  props: {
    userData: {
      type: Object,
    },
  },
  data() {
    return {
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
      console.log('id', id)
      const formdata = new FormData()
      formdata.append('description', e.target.description.value)
      if (this.file) formdata.append('img', this.file)
      editUser(id, formdata).then((res) => {
        console.log(res)
        this.$emit('setUserData', res)
        this.$emit('profileModal')
        e.target.reset()
      })
    },
  },
}
</script>

<style scoped></style>
