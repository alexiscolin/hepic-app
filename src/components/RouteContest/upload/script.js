import { mapState, mapActions } from 'vuex';
import store from '@/store';
import shellApp from '@/components/AppLayout/TheShell';
import contestLayout from '../AppContestLayout';

export default {
  name: 'contestUpload',
  components: {
    shellApp,
    contestLayout,
  },
  data() {
    return {
      picUploaded: false,
      picValidated: false,
      picture: null,
      pictureRender: null,
    };
  },
  computed: {
    ...mapState({
      contest: function $contest(state) {
        return state.contestEntry.contest;
      },
    }),
  },
  methods: {
    upload: function $upload(e) {
      this.picture = e.target.files[0];

      // validation type image
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(e.target.value)) return;

      // confirmation state
      this.picUploaded = true;

      // lecture
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.pictureRender = reader.result;
        console.log(this.pictureRender);
      }, false);
      this.picture && reader.readAsDataURL(this.picture);
    },
    ...mapActions({

    }),
    validate: function $validate() {
      // crea formulaire
      const formData = new FormData();
      const dataKeys = {
        contest: this.contest.brand,
        image: this.picture,
      };
      console.log(dataKeys);
      Object.keys(dataKeys).forEach(key => formData.append(key, dataKeys[key]));

      // API post
      this.$store.dispatch('postPicture', formData).then((res) => {
        console.log(res);
        // eraseState entry-contest
      }).catch((res) => {
        console.log(`error ${res}`);
      });

      this.picValidated = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    // test provenance du load afin de valider agreement sur la page de contest
    if (from.name !== 'Contest' || store.getters.getAgreement !== true) {
      next('/flux');
    } else {
      next();
    }
  },
};
