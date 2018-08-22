export default {
  name: 'userNotification',
  computed: {
    notifications: function $notification() {
      const notif = this.$store.state.callUser.userNotification;
      return (notif && notif.length > 0) || false;
    },
  },
};
