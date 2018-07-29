export default {
  name: 'settings-routes',
  methods: {
    logout: function $logout() {
      this.$store.dispatch('logout').then(() => {
        console.log(this.$store);
        this.$router.push('/');
      });
    },
  },
};
