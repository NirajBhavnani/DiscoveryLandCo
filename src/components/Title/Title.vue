<template>

  <video class="main-bg" autoplay muted loop>
    <source :src="video" type="video/mp4" />
  </video>

  <main class="title">
    <span class="bold-text">{{ bText }}</span>
    <span class="light-text">{{ lText }}</span>
    <span class="scroll-text">Scroll to explore</span>
  </main>
</template>

<script type="module" src="./Title.ts"></script>

<style lang="scss" scoped>
@import "./Title";
</style>