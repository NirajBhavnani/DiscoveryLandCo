<template>
  <div id="header">
    <div id="nav">
      <div id="nav-logo">
        <router-link to="/"
          ><img class="logo" src="../assets/logo.png" alt="Discovery Land Co"
        /></router-link>
      </div>
      <div id="nav-links">
        <router-link to="/about-dlc"><p class="hover-underline-animation">About DLC</p></router-link>
        <router-link to="/our-worlds"><p class="hover-underline-animation">Our Worlds</p></router-link>
        <router-link to="/experiences"><p class="hover-underline-animation">Experiences</p></router-link>
        <router-link to="/gallery"><p class="hover-underline-animation">Gallery</p></router-link>
        <router-link to="/press"><p class="hover-underline-animation">Press</p></router-link>
        <router-link to="/">&#x2630;</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class HelloWorld extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  justify-self: flex-start;
  max-width: 40%;
  height: auto;
}
#header {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 3;
  width: 100%;
  left: 0;
  top: 0;
}
#nav {
  padding-top: 3%;
  width: 94%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  #nav-logo {
    flex: 1;
    justify-content: flex-start;

    display: flex;
    flex-direction: row;
    
  }

  #nav-links {
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 1rem;
      color: #fff;
    }
  }
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #fff;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>