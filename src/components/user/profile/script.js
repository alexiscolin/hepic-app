export default {
  name: 'userProfile',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMyProfile: function $myProfile() {
      return parseInt(this.$route.params.user, 10) === parseInt(JSON.parse(localStorage.getItem('user-data')).id, 10);
    },
  },
};
