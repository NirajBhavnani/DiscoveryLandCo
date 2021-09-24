<template>
  <div id="header">
    <div id="nav">
      <div id="nav-logo">
        <router-link to="/"
          ><img class="logo" src="../../assets/logo.png" alt="Discovery Land Co"
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

<script type="module" src="./Navbar.ts"></script>

<style lang="scss" scoped>
@import "./Navbar";
</style>