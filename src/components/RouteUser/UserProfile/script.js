export default {
  name: 'userProfile',
  computed: {
    isMyProfile: function $myProfile() {
      return parseInt(this.$route.params.user, 10) === parseInt(JSON.parse(localStorage.getItem('user-data')).profile_id, 10);
    },
    user: function $profilData() {
      return this.isMyProfile ? JSON.parse(localStorage.getItem('user-data')) : this.$store.state.callUser.userProfile;
    },
  },
  created: function $created() {
    !this.isMyProfile ? this.$store.dispatch('getUserProfil', this.$route.params.user) : this.$store.commit('setUserProfile', JSON.parse(localStorage.getItem('user-data')));
  },
};
