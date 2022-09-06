<template>
  <div>
    <div class="box">
      <div class="top">
        <figure class="image is-48x48">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
        <div class="control text-container">
          <textarea
            class="textarea has-fixed-size"
            placeholder="What’s happening?"
          ></textarea>
        </div>
      </div>
      <div class="bottom">
        <span class="material-icons-outlined img-upload"> image </span>
        <button class="button is-info">Tweet</button>
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
}
</style>
