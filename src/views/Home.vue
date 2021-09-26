<template>
  <div class="home">
    
    <Title :bText="elements.boldText" :lText="elements.lightText" :video="elements.video"/>

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
        video: string;
      }[],
    };
  },
  created(){
    this.elements = {
      boldText: "Discover",
      lightText: "your world",
      video: require("@/assets/discovery.mp4")
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
}
</style>