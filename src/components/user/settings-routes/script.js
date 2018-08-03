export default {
  name: 'settings-routes',
  methods: {
    logout: function $logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    },
  },
};
