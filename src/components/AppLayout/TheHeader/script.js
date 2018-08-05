import throttle from '@/utils/throttle';

export default {
  name: 'appHeader',
  data() {
    return {
      msg: 'Hello tout le monde !',
      hidden: false,
      yPos: 0,
      userId: JSON.parse(localStorage.getItem('user-data')).id,
      userPicture: JSON.parse(localStorage.getItem('user-data')).picture,
    };
  },
  methods: {
    onScroll: throttle(function $throttleOnScroll() {
      const down = window.pageYOffset > 0 && this.yPos < window.pageYOffset;
      if (down && !this.hidden) {
        this.$el.classList.add('s--is-transY-100');
        this.hidden = true;
      } else if (!down && this.hidden) {
        this.$el.classList.remove('s--is-transY-100');
        this.hidden = false;
      }
      this.yPos = window.pageYOffset;
    }, 500),
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, false);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, false);
  },
};