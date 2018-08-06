import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/layer-popin';
import infoPopin from './info-popin';

export default {
  name: 'displayImage',
  components: {
    shellApp,
    layerPopin,
    infoPopin,
  },
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
    media: function $media() {
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.getters.getUserPhotoById(id) || this.$store.getters.getPhoto;
    },
    profile: function $profile() {
      const idUser = this.media.profile; // return et watch media ? profile dans then de media ?
      console.log(this.$store.getters.getUserProfil);
      return this.$store.getters.getUserProfil || this.$store('getUserProfil', idUser);
    },
    getId: function $getId() { // utile ??
      const idPhoto = this.$route.params.id;
      return parseInt(idPhoto, 10);
    },
  },
  methods: {
    displayPopin: function $displayPopin() {
      this.$store.commit('popinDisplay');
      this.$store.commit('hideOptin');
    },
  },
  created: function $created() {
    // dispatch('')
  },
};
