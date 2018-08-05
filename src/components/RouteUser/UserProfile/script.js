export default {
  name: 'userProfile',
  computed: {
    isMyProfile: function $myProfile() {
      return parseInt(this.$route.params.user, 10) === parseInt(JSON.parse(localStorage.getItem('user-data')).profile_id, 10);
    },
    user: function $profilData() {
      return JSON.parse(localStorage.getItem('user-data'));
    },
  },
};
