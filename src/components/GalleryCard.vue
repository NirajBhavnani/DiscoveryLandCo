<template>
  <div class="gallery-card">
    <img class="gallery-img" :src="pic" :alt="text" />
    <div class="gallery-text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "GalleryCard",
    props: {
        pic: {
        type: String,
      },
      text: {
        type: String,
        // required: true,
      },
    },
})

export default class GalleryCard extends Vue {}
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap");
  .gallery-card {
    display: flex;
    flex-direction: column;
    .gallery-img {
      width: 100%;
    }
    .gallery-text {
      font-family: "Scheherazade New", serif;
      font-size: 1.5rem;
      background: #111;
      color: #fff;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>