import detectOS from '@/utils/detect-os';

export default {
  name: 'installBtn',
  data() {
    return {
      popinDisplayed: false,
      os: detectOS(),
    };
  },
  methods: {
    displayPopin: function $displayPopin() {
      this.popinDisplayed = this.popinDisplayed === false;
    },
  },
};
