import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/layer-popin';
import infoPopin from './info-popin';

// import config from './config.json';

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
      console.log(this.$store.getters.getUserPhotoById(id));
      return this.$store.getters.getUserPhotoById(id) || this.$store.getters.getPhoto;
      // return config.pictures.find(item => item.id === id); // recup item verifiant l'id demandé
    },
    getId: function $getId() {
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
