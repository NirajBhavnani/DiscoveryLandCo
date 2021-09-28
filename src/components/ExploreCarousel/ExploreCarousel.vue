<template>
  <div class="explore-container">
    <div class="explore-top">
      <div class="explore-header">
        <span class="header-first-half"> Explore </span>
        <span class="header-second-half"> our worlds </span>
      </div>
      <div class="button-pair">
        <button class="left-button">&#8592;</button>
        <button class="right-button">&#8594;</button>
      </div>
    </div>
    <div class="slider">
        <div class="slider-track" v-for="items in ourWorldList" :key="items.title">
            <div class="slide">
                <div class="image-holder">
                    <img :src="getImgURL(items.pic)">
                </div>
                <div class="img-description">
                    <span class = "img-title" v-text="items.title"></span>
                    <span class = "img-location" v-text="items.location"></span> 
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="module" src="./ExploreCarousel.ts"></script>

<style scoped lang="scss">
@import "./ExploreCarousel";
</style>