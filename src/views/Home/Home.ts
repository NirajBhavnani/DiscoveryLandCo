import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue"
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue"
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";
import Globe from "@/components/Globe/Globe.vue";
import Panels from "@/components/Panels/Panels.vue";

@Options({
  name:"Home",
  components: {
    Title,
    TxtImg2,
    ExploreCarousel,
    Globe,
    Panels
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        header1: string;
        header2: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
        carousel: [];
        carouselH1: string;
        carouselH2: string;
      }[],
    };
  },
  created(){
    this.elements = {
      boldText: "Discover",
      lightText: "your world",
      video: require("@/assets/discovery.mp4"),
      header1: "Welcome to",
      header2: "our world",
      paragraph: "Discover the unique atmosphere of our private residential club\
          communities. Once experienced. Never forgotten. This is classic,\
          comfortable, modern living in nature’s most spectacular settings\
          worldwide. Reassuringly exclusive. Generously welcoming. Find your\
          unique world – a place where families love to be; creating\
          unforgettable moments, together.",
      imgRight: require('@/assets/TxtImg2/TxtImg1.jpg'),
      imgLeft: require('@/assets/TxtImg2/TxtImg2.jpg'),
      carousel: [
        {
          pic: "p1.jpg",
          title: "NORTH SHORE PRESERVE",
          location: `Kaua'i, Hawaii`,
        },
        {
          pic: "p2.jpg",
          title: "JAMES ISLAND",
          location: `Southern Gulf Islands, British Columbia, Canada`,
        },
        {
          pic: "p3.jpg",
          title: "COSTATERRA",
          location: `Comporta, Portugal`,
        },
        {
          pic: "p4.jpg",
          title: "BARBUDA OCEAN CLUB",
          location: `Barbuda, West Indies`,
        },
        {
          pic: "p5.jpg",
          title: "DRIFTWOOD",
          location: `Austin, Texas`,
        },
        {
          pic: "p6.jpg",
          title: "TROUBADOUR",
          location: `Nashville, Tennessee`,
        },
        {
          pic: "p7.jpg",
          title: "PLAYA GRANDE",
          location: `Rio San Juan, Dominican Republic`,
        },
        {
          pic: "p8.jpg",
          title: "CHILENO BAY",
          location: `Cabo San Lucas, Mexico`,
        },
        {
          pic: "p9.jpg",
          title: "THE SUMMIT",
          location: `Las Vegas, Nevada`,
        },
        {
          pic: "p10.jpg",
          title: "DUNE DECK",
          location: `Westhamton Beach, NY`,
        },
        {
          pic: "p11.jpg",
          title: "SILO RIDGE",
          location: `Amenia, New York`,
        },
        {
          pic: "p12.jpg",
          title: "MAKENA",
          location: `Maui, Hawaii`,
        },
        {
          pic: "p13.jpg",
          title: "YELLOWSTONE CLUB",
          location: `Big Sky, Montana`,
        },
        {
          pic: "p14.jpg",
          title: "GOZZER RANCH",
          location: `Coeur d'Alene, Idaho`,
        },
        {
          pic: "p15.jpg",
          title: "EL DORADO",
          location: `Los Gabos, Mexico`,
        },
        {
          pic: "p16.jpg",
          title: "MADISON",
          location: `La Quinta, California`,
        },
        {
          pic: "p17.jpg",
          title: `BAKER'S BAY`,
          location: `Great Guana Cay, Behamas`,
        },
        {
          pic: "p18.jpg",
          title: "HIDEAWAY",
          location: `La Quinta California`,
        },
        {
          pic: "p19.jpg",
          title: "MOUNTAINTOP",
          location: `Cashiers North Carolina`,
        },
        {
          pic: "p20.jpg",
          title: "MIRABEL",
          location: `Scottsdale, Azizona`,
        },
        {
          pic: "p21.jpg",
          title: "KUKIO",
          location: `Kohala, Hawaii`,
        },
        {
          pic: "p22.jpg",
          title: "VAQUERO",
          location: `Westlake, Texas`,
        },
        {
          pic: "p23.jpg",
          title: "IRON HORSE",
          location: `Whitefish, Montana`,
        },
        {
          pic: "p24.jpg",
          title: "CORDEVALLE",
          location: `Silicon Valley, California`,
        },
        {
          pic: "p25.jpg",
          title: "ESTANICIA",
          location: `Scottsdale, Arizona`,
        },
      ],
      carouselH1: "Explore",
      carouselH2: "our worlds",
    }
  }
})
export default class Home extends Vue {}