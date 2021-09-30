<template>
  <div class="experiences">
    <div class="experiences-title">
      <Title
        :bText="elements.boldText"
        :lText="elements.lightText"
        :video="elements.video"
      />
    </div>
  </div>
</template>

<script type="module" src="./Experiences.ts"></script>

<style lang="scss" scoped>
@import "./Experiences";
</style>