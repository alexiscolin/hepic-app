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
  watch: {
    '$route.params.user': function $routeParamsChange() {
      this.getPhotos(); // changement de params dans la route
    },
  },
  methods: {
    getPhotos: function $getPhotos() {
      const userId = this.$route.params.user;
      this.$store.dispatch('getUserPhotos', userId);
    },
  },
  created: function $created() {
    this.getPhotos();
  },
};
