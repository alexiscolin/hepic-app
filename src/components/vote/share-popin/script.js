import socialSharing from 'vue-social-sharing';

export default {
  name: 'sharePopin',
  components: {
    socialSharing,
  },
  data (){
    return {
      title: 'photo du concours',
    };
  },
  computed: {
    currentUrl: function $currentUrl() {
      return `https://${window.location.hostname}:${window.location.port + this.$route.fullPath}`;
    },
  },
};
