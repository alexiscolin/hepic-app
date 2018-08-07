import throttle from '@/utils/throttle';

export default {
  name: 'SearchBar',
  methods: {
    search: throttle(function $search(e) {
      this.$store.dispatch('searchContests', e.target.value).then((res) => {
        console.log(res);
      });
    }, 1000),
  },
};
