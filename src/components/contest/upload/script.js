import contestLayout from '../layout';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'contestUpload',
  components: {
    contestLayout
  },
  data(){
    return {
      picUploaded: false,
      picValidated: false,
      picture: null,
      pictureRender: null,
    }
  },
  computed: {
    ...mapState({
      contest: function(state){
        return state.contestEntry.contest
      }
    })
  },
  methods: {
    upload: function(e){
      this.picture = e.target.files[0];

      // validation type image
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if(!allowedExtensions.exec(e.target.value)) return;

      // confirmation state
      this.picUploaded = true;

      // lecture
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.pictureRender = reader.result;
      }, false);
      this.picture && reader.readAsDataURL(this.picture);
    },
    ...mapActions({

    }),
    validate: function(){
      this.$store.dispatch('postPicture', { test: "bonjour" }).then(() => {
        console.log(res)
      }).catch((res) => {
        console.log('error ' + res)
      });

      this.picValidated = true;
    },
  }
}
