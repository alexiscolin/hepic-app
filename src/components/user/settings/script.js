import config from './config.json';

export default {
  name: 'settings',
  data() {
    return {
      data: config.data,
      type: null,
      title: String,
      settingsContent: 'blabla from API',
    };
  },
  created: function $created() {
    this.type = this.$route.params.type;
    const vue = Array.from(this.data).find(el => el.type === this.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};
