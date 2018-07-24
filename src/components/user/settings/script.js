import config from './config.json';

export default {
  name: 'settings',
  data() {
    return {
      data: config.data,
      title: String,
      settingsContent: null,
    };
  },
  created: function $created() {
    const vue = Array.from(this.data).find(el => el.type === this.$route.params.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};
