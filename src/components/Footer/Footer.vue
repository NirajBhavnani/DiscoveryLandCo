<template>
  <footer class="main-footer">
    <div class="footer-content">
      <img class="small-logo" src="../../assets/logo-footer.png" alt="Logo" />
      <div class="columns">
        <div class="contact column">
          <header>GET IN TOUCH</header>
          <address class="content">
            <a href="tel:(480) 624-5200">
              <p class="hover-underline-animation">(480) 624-5200</p>
            </a>
            <a href="mailto:mail@discoverylandco.com" class="hover-underline-animation">
              mail@discoverylandco.com
            </a>
          </address>
        </div>
        <div class="about column">
          <router-link to="/about-dlc"
            ><p class="hover-underline-animation">About DLC</p></router-link
          >
          <router-link to="/our-worlds"
            ><p class="hover-underline-animation">Our Worlds</p></router-link
          >
          <router-link to="/experiences"
            ><p class="hover-underline-animation">Experiences</p></router-link
          >
          <router-link to="/gallery"
            ><p class="hover-underline-animation">Gallery</p></router-link
          >
          <router-link to="/press"
            ><p class="hover-underline-animation">Press</p></router-link
          >
        </div>
        <div class="magazine column">
          <router-link to="/"
            ><p class="hover-underline-animation">Magazine</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Careers</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Foundation</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Company</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Contact</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Privacy</p></router-link
          >
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        &#169; Discovery Land Company. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script type="module" src="./Footer.ts"></script>

<style scoped lang="scss">
  @import "./Footer";
</style>