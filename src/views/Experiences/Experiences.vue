<template>
  <div class="experiences">
    <div class="experiences-title">
      <Title
        :bText="elements.boldText"
        :lText="elements.lightText"
        :video="elements.video"
      />
    </div>
    <IntroSection
      :paragraphs="elements.introParas"
      :title="elements.title"
      :txtParagraphs="elements.txtParagraphs"
      :image="require('../../assets/IntroSection/Experiences.jpg')"
    />
    <BottomSection picture="Experiences.jpg" />
  </div>
</template>

<script type="module" src="./Experiences.ts"></script>

<style lang="scss" scoped>
@import "./Experiences";
</style>