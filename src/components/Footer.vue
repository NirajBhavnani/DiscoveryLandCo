<template>
  <div class="footer">
    <div class="misc">
      <div class="logo">
        <img
          class="small-logo"
          src="../assets/logo-footer.png"
          alt="Logo"
        />
      </div>
      <div class="copyright">
        <p class="copyright-text">
          &#169; Discovery Land Company. All rights reserved
        </p>
      </div>
    </div>
    <div class="contact-us">
      <p class="contact-title">GET IN TOUCH</p>
      <router-link to="/">(480) 624-5200</router-link>
      <router-link to="/">mail@discoverylandco.com</router-link>
    </div>
    <div class="about">
      <router-link to="/">About DLC</router-link>
      <router-link to="/">Our Worlds</router-link>
      <router-link to="/">Experiences</router-link>
      <router-link to="/">Gallery</router-link>
      <router-link to="/">Press</router-link>
    </div>
    <div class="extras">
      <router-link to="/">Magazine</router-link>
      <router-link to="/">Careers</router-link>
      <router-link to="/">Foundation</router-link>
      <router-link to="/">Company</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/">Privacy</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>

@mixin menuStyles {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #161f1e;
  height: 50vh;
  padding-top: 7%;
//   position: fixed;
  z-index: 3;
  width: 100%;
  left: 0;
  bottom: 0;
}
.misc {
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contact-us {
  flex: 1;
  @include menuStyles();
}
.about {
  flex: 1;
  @include menuStyles();
}
.extras {
  flex: 1;
  @include menuStyles();
}
a,
.contact-title {
  text-decoration: none;
  color: #fff;
  padding-top: 1rem;
}
.contact-title {
  color: #6f7574;
  font-size: 0.85rem;
}
.small-logo {
  width: 10%;
  height: 30%;
}
.logo {
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: flex-start;
  padding-left: 20%;
}
.copyright {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: flex-start;
}
.copyright-text {
  color: #444b4a;
  font-size: 0.7rem;
  padding-left: 20%;
}
</style>