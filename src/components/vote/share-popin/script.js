import socialSharing from 'vue-social-sharing';

export default {
  name: 'sharePopin',
  components: {
    socialSharing,
  },
  computed: {
    currentUrl: function $currentUrl() {
      return `${window.location.hostname}:${window.location.port + this.$route.fullPath}`;
    },
  },
};
