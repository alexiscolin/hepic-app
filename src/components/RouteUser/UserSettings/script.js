import shellApp from '@/components/AppLayout/TheShell';
import createFormData from '@/utils/form-data';
import config from './config.json';

export default {
  name: 'settings',
  components: {
    shellApp,
  },
  data() {
    return {
      data: config.data,
      type: this.$route.params.type,
      title: String,
      settingsContent: 'blabla from API',
      contactObjet: '',
      contactMessage: '',
    };
  },
  methods: {
    sendMessage: function $sendMessage() {
      const data = createFormData({
        object: this.contactObjet,
        message: this.contactMessage,
      });
      this.$store.dispatch('postContactMessage', data).then(() => {
        this.$router.go(-1); // il vaudrait mieux y avoir un vrai callback...
      });
    },
  },
  created: function $created() {
    const vue = Array.from(this.data).find(el => el.type === this.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};
