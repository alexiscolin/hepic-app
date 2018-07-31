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
    id: {
      type: Number,
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
  methods: {
    displayOptin: function $displayOptin() {
      const data = { id: this.id };
      this.$store.commit('dispayOptin', {
        reqText: 'Signaler cette photo',
        cbText: 'Photo signalée!',
        type: 'signalPhoto',
        data,
      });
    },
  },
};
