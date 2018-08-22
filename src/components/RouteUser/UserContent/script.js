export default {
  name: 'userContent',
  computed: {
    userPhotos: function $userPhotos() {
      console.log(this.$store.state.callUser.userPhotos);
      return this.$store.state.callUser.userPhotos;
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
