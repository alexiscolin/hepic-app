export default {
  name: 'installBtn',
  data() {
    return {
      popinDisplayed: false,
    };
  },
  methods: {
    displayPopin: function $displayPopin() {
      this.popinDisplayed = this.popinDisplayed === false;
      console.log(window.navigator);
    },
  },
};
