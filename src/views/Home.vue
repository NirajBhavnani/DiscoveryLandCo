<template>
  <div class="home">
    
    <video class="main-bg" autoplay muted loop>
      <source src="@/assets/discovery.mp4" type="video/mp4" />
    </video>
    
    <Title :bText="elements.boldText" :lText="elements.lightText"/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue"


@Options({
  name:"Home",
  components: {
    Title
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
      }[],
    };
  },
  created(){
    this.elements = {
      boldText: "Discover",
      lightText: "your world",
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;
  width: 100%;
  position: relative;
  video.main-bg {
    min-width: 100%;
    min-height: 100vh;
  }
}
</style>