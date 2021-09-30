import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";

@Options({
  name: "AboutDlc",
  components: {
    Title,
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
      boldText: "Creating your",
      lightText: "perfect world",
      
    };
  },
})
export default class AboutDlc extends Vue {}
