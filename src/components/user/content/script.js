export default {
  name: 'userContent',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userPhotos: function $userPhotos() {
      return this.$store.getters.getUserPhotos;
    },
  },
  created: function $created() {
    this.$store.dispatch('getUserPhotos', 2);
  },
};
