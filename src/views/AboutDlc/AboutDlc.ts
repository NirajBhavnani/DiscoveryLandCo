import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";

@Options({
  name: "AboutDlc",
  components: {
    Title,
    ExploreCarousel
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        carousel: [];
        carouselH1: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Creating your",
      lightText: "perfect world",
      carousel: [
        {
            pic: "p1.jpg",
            title: "Focus on family",
            location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
          },
          {
            pic: "p2.jpg",
            title: "Incomparable experiences",
            location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
          },
          {
            pic: "p3.jpg",
            title: "Inspired by land",
            location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
          },
          {
            pic: "p4.jpg",
            title: "Sustainable future",
            location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
          },
          {
            pic: "p5.jpg",
            title: "Luxury bespoke homes",
            location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
          },
          {
            pic: "p1.jpg",
            title: "Focus on family",
            location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
          },
          {
            pic: "p2.jpg",
            title: "Incomparable experiences",
            location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
          },
          {
            pic: "p3.jpg",
            title: "Inspired by land",
            location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
          },
          {
            pic: "p4.jpg",
            title: "Sustainable future",
            location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
          },
          {
            pic: "p5.jpg",
            title: "Luxury bespoke homes",
            location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
          },
      ],
      carouselH1: "The Discovery Difference",
    };
  },
})
export default class AboutDlc extends Vue {}
