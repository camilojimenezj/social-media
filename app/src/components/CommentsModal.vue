<template>
  <div class="modal comments-modal">
    <div class="modal-background" @click="$emit('commentsModal')"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="card">
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
            <div class="field my-textarea">
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="Comment"
                ></textarea>
              </div>
            </div>
            <div class="button">Send</div>
          </div>

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
              <p class="subtitle is-6">John Smith</p>
              <p>
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque
              </p>
            </div>
          </div>
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
export default {}
</script>

<style scoped>
.my-textarea {
  width: 100%;
  margin: 0 10px;
}
</style>
