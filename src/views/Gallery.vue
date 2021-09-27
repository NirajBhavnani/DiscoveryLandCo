<template>
  <section class="main">
    <div class="gallery">
      <div class="main-image">Gallery</div>
      <div class="gallery-cards">
        <GalleryCard
          v-for="(image, index) in images"
          :key="index"
          :text="image.title"
          :pic="image.gallery_images"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GalleryCard from "@/components/GalleryCard/GalleryCard.vue";

@Options({
  name: "Gallery",
  components: {
    GalleryCard,
  },
  data() {
    return {
      images: [] as {
        title: string;
        gallery_images: string;
      }[],
    };
  },
  created: function () {
    const titles: string[] = [
      "Outdoor Pursuits",
      "Golf",
      "Lifestyle",
      "Landscapes",
      "Clubhouses",
      "Wellness",
    ];
    for (let i = 1; i <= 6; i++) {
      this.images.push({
        title: titles[i - 1],
        gallery_images: require(`@/assets/Gallery/gallery-${i}.jpg`),
      });
    }
  },
})
export default class Gallery extends Vue {}
</script>

<style scoped lang="scss">
$main-image: "../assets/Gallery/";
section.main {
  .gallery {
    .main-image {
      background: url(#{$main-image}/gallery-main-1.jpg);
      height: 65vh;
      background-size: cover;
      background-position: center;
      max-width: 100%;
      display: flex;
      align-items: center;
      padding-left: 8rem;
      font-size: 4rem;
      color: #fff;
      font-family: "Times New Roman", Times, serif;
      @media screen and (max-width: 500px) {
        padding: 1rem;
        font-size: 2rem;
      }
    }
    .gallery-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
      }
      @media screen and (min-width: 576.1px) and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>