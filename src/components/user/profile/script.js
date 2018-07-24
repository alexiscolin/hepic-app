export default {
  name: 'userProfile',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    displayPopin: function $displayPopin() {
      this.$emit('displayPopin', true);
    },
  },
};
