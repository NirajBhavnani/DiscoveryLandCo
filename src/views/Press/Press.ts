import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import PressArticles from "@/components/PressArticles/PressArticles.vue";

@Options({
  name: "Press",
  components: {
    Title,
    PressArticles,
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "News",
      lightText: "and Press",
    };
  },
})
export default class Press extends Vue {}
