<template>
  <div class="home">
    
    <video class="main-bg" autoplay muted loop>
      <source src="@/assets/timelapse.mp4" type="video/mp4" />
    </video>
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";



@Options({
  name:"Home",
  
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  video.main-bg {
    min-width: 100vw;
    min-height: 100vh;
    left: 0;
    top: 0;
    // position: absolute;
  }
}
</style>