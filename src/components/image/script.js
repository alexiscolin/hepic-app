import shellApp from '@/components/layout/shell';
import layerPopin from '@/components/layout//layer-popin';
import infoPopin from './info-popin';

import config from './config.json';

export default {
  name: 'displayImage',
  components: {
    shellApp,
    layerPopin,
    infoPopin,
  },
  data() {
    return {
      displayedPopin: false,
    };
  },
  computed: {
    media: function $media() {
      const id = parseInt(this.$route.params.id, 10);
      console.log(config.pictures.find(item => item.id === id));
      return config.pictures.find(item => item.id === id); // recup item verifiant l'id demandé
    },
    getId: function $getId() {
      return parseInt(this.$route.params.id, 10);
    },
  },
  methods: {
    displayPopin: function $displayPopin(e) {
      this.displayedPopin = e;
      this.$store.commit('hideOptin');
    },
  },
};
