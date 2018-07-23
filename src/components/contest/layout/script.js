export default {
  name: 'contestLayout',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      contest: this.data,
    };
  },
};
