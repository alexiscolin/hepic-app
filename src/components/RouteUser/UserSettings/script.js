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
      contactObjet: '',
      contactMessage: '',
    };
  },
  computed: {
    settingsContent: function $settingsContent() {
      return this.$store.state.callUser.configContent;
    },
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
    // récup infos perso ou cgu
    switch (this.$route.params.type) {
      case 'cgu':
        this.$store.dispatch('getConfigCGU');
        break;
      case 'personal-data':
        this.$store.dispatch('getConfigPersonal', JSON.parse(localStorage.getItem('user-data')).profile_id);
        break;
      default:
        this.$store.dispatch('getConfigCGU');
        break;
    }

    const vue = Array.from(this.data).find(el => el.type === this.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};
