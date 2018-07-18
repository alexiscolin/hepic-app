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
      return config.pictures.find(item => item.id === 2); // recup item verifiant l'id demandé
    }
  }
}
