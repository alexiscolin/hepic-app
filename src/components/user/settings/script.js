import config from './config.json';

export default {
  name: 'settings',
  data() {
    const test = {
      data: config.data,
      type: this.$route.params.type,
      title: String,
      settingsContent: 'blabla from API',
    };
    console.log(test.type);
    return test;
  },
  created: function $created() {
    const vue = Array.from(this.data).find(el => el.type === this.type);
    this.title = vue.title;
    this.desc = vue.desc || false;
  },
};
