import createFormData from '@/utils/form-data';

export default {
  name: 'userNotification',
  computed: {
    notifications: function $notification() {
      console.log(this.$store.state.callUser.userNotification);
      return this.$store.state.callUser.userNotification || false;
    },
  },
  created: function $created() {
    const notif = this.$store.state.callUser.userNotification;
    if (notif) {
      const formData = createFormData({
        id: notif.id,
      });
      this.$store.dispatch('postNotification', formData);
    }
  },
};
