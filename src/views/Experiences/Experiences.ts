import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";

@Options({
  name: "Experiences",
  components: {
    Title,
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
      }[],
    };
  },
  created(){
      this.elements = {
        boldText: "Unforgettable",
        lightText: "experiences",
        video: require("@/assets/experiences.mp4"),
      }
  }
})
export default class Experiences extends Vue {}
