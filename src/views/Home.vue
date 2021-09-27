<template>
  <div>
    <div class="home">
    
      <Title :bText="elements.boldText" :lText="elements.lightText" :video="elements.video"/>
    </div>
      <TxtImg2 :header1="elements.header1" :header2="elements.header2" :paragraph="elements.paragraph" :imgRight="elements.imgRight" :imgLeft="elements.imgLeft" :background="require('@/assets/TxtImg2/Background.jpg')"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue"
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue"


@Options({
  name:"Home",
  components: {
    Title,
    TxtImg2
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        header1: string;
        header2: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
      }[],
    };
  },
  created(){
    this.elements = {
      boldText: "Discover",
      lightText: "your world",
      video: require("@/assets/discovery.mp4"),
      header1: "Welcome to",
      header2: "our world",
      paragraph: "Discover the unique atmosphere of our private residential club\
          communities. Once experienced. Never forgotten. This is classic,\
          comfortable, modern living in nature’s most spectacular settings\
          worldwide. Reassuringly exclusive. Generously welcoming. Find your\
          unique world – a place where families love to be; creating\
          unforgettable moments, together.",
      imgRight: require('@/assets/TxtImg2/TxtImg1.jpg'),
      imgLeft: require('@/assets/TxtImg2/TxtImg2.jpg'),
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