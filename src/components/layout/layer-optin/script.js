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
      return this.$store.state.layerOptin.color === 'green' ? 'f-green' : 'f-red';
    },
  },
  methods: {
    hide: function $hide() {
      this.$store.commit('dispayOptin');
    },
    action: function $action() {
      this.$store.dispatch('optinAction');
    },
  },
};
