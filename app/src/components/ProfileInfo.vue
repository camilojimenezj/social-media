<template>
  <div>
    <div class="box">
      <div class="top">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
        <div class="username">
          <div class="title is-4">Camilo Jimenez Jaramillo</div>
          <button class="button" @click="$emit('profileModal')">
            Edit profile
          </button>
        </div>
      </div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  width: 600px;
}
.top {
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
}
</style>
