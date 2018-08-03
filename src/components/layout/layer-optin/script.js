export default {
  name: 'layerOptin',
  computed: {
    display: function $display() {
      return this.$store.state.layerOptin.displayed;
    },
    text: function $text() {
      return this.$store.state.layerOptin.text;
    },
    color: function $color() {
      return this.$store.getters.colorCSS;
    },
    zone: function $zone() {
      return this.$store.getters.zoneCSS;
    },
  },
  methods: {
    hide: function $hide() {
      this.$store.state.layerOptin.central && this.$store.commit('popinDisplay'); // effacer popin si optin central
      this.$store.commit('displayOptin');
    },
    action: function $action() {
      this.$store.dispatch('optinAction');
    },
  },
};
