import shellApp from '@/components/AppLayout/TheShell';
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
  created: function $created() {
    const vue = Array.from(this.data).find(el => el.type === this.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};