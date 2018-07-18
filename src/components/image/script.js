import config from './config.json';

export default {
  name: 'displayImage',
  // components: {
  //   fluxTile,
  //   fluxPodium
  // },
  data() {
    return {
      //image:
    };
  },
  computed: {
    media: function() {
      let id = parseInt(this.$route.params.id);
      return config.pictures.find(item => item.id === id); // recup item verifiant l'id demandé
    }
  }
}
