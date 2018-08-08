import throttle from '@/utils/throttle';

export default {
  name: 'SearchBar',
  methods: {
    search: throttle(function $search(e) {
      this.$store.dispatch('searchContests', e.target.value).then((contests) => {
        this.$store.state.callcontest.contests = contests;
        this.$colcade.update('flux');
      });
    }, 600),
  },
};
