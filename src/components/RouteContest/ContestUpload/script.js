import { mapState } from 'vuex';
import store from '@/store';
import createFormData from '@/utils/form-data';
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
      }, false);
      this.picture && reader.readAsDataURL(this.picture);
    },
    validate: function $validate() {
      // crea formulaire
      const formData = createFormData({
        contest: this.contest.id,
        file: this.picture,
      });

      // API post
      this.$store.dispatch('postContestPhoto', formData).catch((res) => {
        console.log(res);
      });

      this.picValidated = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    // effacer données concours -> sécurité
    const contestEntry = this.$store.state.contestEntry;
    Object.keys(contestEntry.contest).forEach((v) => { contestEntry.contest[v] = null; });
    next();
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
