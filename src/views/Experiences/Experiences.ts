import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";

@Options({
  name: "Experiences",
  components: {
    Title,
    IntroSection,
    BottomSection
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        introParas: [];
        title: string;
        txtParagraphs: [];
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Unforgettable",
      lightText: "experiences",
      video: require("@/assets/experiences.mp4"),
      introParas: [
        " Memorable days. Exceptional nights. We believe it’s our mission to ",
        "make every minute matter. So you can live your life to the fullest, ",
        "with the people closest to you. ",
      ],
      title: "Exclusive to<br>your world",
      txtParagraphs: [
        "Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.",
      ],
    };
  },
})
export default class Experiences extends Vue {}
