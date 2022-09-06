<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('handleModal')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit profile</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('handleModal')"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <label class="label">Profile image</label>
        <div class="file is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="material-icons-outlined"> file_upload </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-info">Save changes</button>
        <button class="button" @click="$emit('handleModal')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
