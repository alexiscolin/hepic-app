import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/LayerPopin';
import infoPopin from './InfoPopin';

export default {
  name: 'displayImage',
  components: {
    shellApp,
    layerPopin,
    infoPopin,
  },
  data() {
    return {
      idPhoto: parseInt(this.$route.params.id, 10),
    };
  },
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
    media: function $media() {
      return this.$store.getters.getUserPhotoById(this.idPhoto)
      || this.$store.state.callPhoto.photo;
    },
    profile: function $profile() {
      return this.$store.state.callUser.userProfile;
    },
    contest: function $contest() {
      return this.$store.state.callcontest.contest;
    },
  },
  methods: {
    displayPopin: function $displayPopin() {
      this.$store.commit('popinDisplay');
      this.$store.commit('hideOptin');
    },
  },
  created: function $created() {
    const photo = this.$store.getters.getUserPhotoById(this.idPhoto);
    !photo && this.$store.dispatch('getPhoto', this.idPhoto).then((res) => {
      this.$store.dispatch('getUserProfil', res.data.profile); // Recup infos profile
      this.$store.dispatch('getContest', res.data.contest); // recup infos contest
    });
    photo && this.$store.dispatch('getContest', photo.contest); // recup infos contest
  },
};
