import config from './config.json';

export default {
  name: 'displayImage',
  computed: {
    media: function $media() {
      const id = parseInt(this.$route.params.id, 10);
      return config.pictures.find(item => item.id === id); // recup item verifiant l'id demandé
    },
  },
};
