export default {
  name: 'contestLayout',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    contest: function $contest() {
      return this.$store.state.callcontest.contest;
    },
  },
};
