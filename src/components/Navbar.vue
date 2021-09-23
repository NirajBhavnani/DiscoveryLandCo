<template>
  <div id="header">
    <div id="nav">
      <div id="nav-logo">
        <router-link to="/"
          ><img class="logo" src="../assets/logo.png" alt="Discovery Land Co"
        /></router-link>
      </div>
      <div id="nav-links">
        <router-link to="/about-dlc">About DLC</router-link>
        <router-link to="/our-worlds">Our Worlds</router-link>
        <router-link to="/experiences">Experiences</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/press">Press</router-link>
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
</style>