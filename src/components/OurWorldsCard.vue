<template>
  <section class="our-worlds-card">
    <img class="location-pic" :src="pic" :alt="text" />
    <div class="data">
      <div class="title" v-text="title"></div>
      <div class="subtitle" v-text="subtitle"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "OurWorldsCard",
    props:{
        pic: {
        type: String,
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
    }
})

export default class OurWorldsCard extends Vue {}
</script>

<style scoped lang="scss">
.our-worlds-card {
  .location-pic {
    width: 100%;
  }
  .data {
    margin-top: 0.5rem;
    .title {
      font-size: 0.9rem;
    }
    .subtitle {
      font-size: 0.85rem;
      color: #777;
    }
  }
}
</style>