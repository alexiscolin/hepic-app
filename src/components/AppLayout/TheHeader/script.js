import throttle from '@/utils/throttle';
import SearchBar from './SearchBar';

export default {
  name: 'appHeader',
  components: {
    SearchBar,
  },
  data() {
    return {
      hidden: false,
      yPos: 0,
      userId: JSON.parse(localStorage.getItem('user-data')).profile_id,
      userPicture: JSON.parse(localStorage.getItem('user-data')).picture,
    };
  },
  computed: {
    hasNotification: function $hasNotification() {
      const notif = this.$store.state.callUser.userNotification;
      return (notif && notif.length > 0) || false;
    },
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
    }, 300),
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, false);
  },
};
