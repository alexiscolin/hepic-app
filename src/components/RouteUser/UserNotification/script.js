import createFormData from '@/utils/form-data';

export default {
  name: 'userNotification',
  computed: {
    notification: function $notification() {
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
