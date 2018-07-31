export default {
  name: 'layerOptin',
  computed: {
    display: function $display() {
      return this.$store.state.layerOptin.displayed;
    },
    text: function $text() {
      return this.$store.state.layerOptin.text;
    },
  },
};
