<template>
  <div>
    <div class="about-dlc">
      <Title :bText="elements.boldText" :lText="elements.lightText" :imageBg="require('../../assets/aboutBg.jpg')"/>
    </div>
      <ExploreCarousel :carouselH1="elements.carouselH1" :carousel="elements.carousel" worldPath="AboutDlc"/>
  </div>
</template>

<script type="module" src="./AboutDlc.ts"></script>

<style scoped lang="scss">
@import "./AboutDlc";
</style>