import config from './config.json';

export default {
  name: 'displayImage',
  computed: {
    media: function() {
      const id = parseInt(this.$route.params.id);
      return config.pictures.find(item => item.id === id); // recup item verifiant l'id demandé
    }
  }
}
