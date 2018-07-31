import socialSharing from 'vue-social-sharing';

export default {
  name: 'sharePopin',
  components: {
    socialSharing,
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: 'photo du concours',
    };
  },
  computed: {
    currentUrl: function $currentUrl() {
      return `https://${window.location.hostname}${(window.location.port && ':') + window.location.port + this.$route.fullPath}`;
    },
  },
};
