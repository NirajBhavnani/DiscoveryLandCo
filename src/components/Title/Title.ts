import { Options, Vue } from "vue-class-component";

@Options({
    name: "Title",
    props: {
        bText : {
            type: String
        },
        lText : {
            type: String
        }
    }
})

export default class Title extends Vue {}