// import Colcade from 'colcade';
// import colcade from '@/plugins/vue-colcade';
import { mapState } from 'vuex';
import shellApp from '@/components/AppLayout/TheShell';
import TileContest from './TileContest';
import TilePodium from './TilePodium';

export default {
  name: 'mainFlux',
  components: {
    shellApp,
    TileContest,
    TilePodium,
  },
  data() {
    return {
      gridColcade: null,
    };
  },
  computed: mapState({
    contests: state => state.callcontest.contests,
  }),
  created: function $created() {
    this.PgetContests = this.$store.dispatch('getContests');
  },
  mounted: function $mounted() {
    const elem = document.querySelector('.o-grid');
    Promise.all([this.PgetContests]).finally(() => {
      this.$colcade.create({
        name: 'flux',
        el: elem,
        config: {
          columns: '.grid-col',
          items: '.o-tile-grided',
        },
      });
    });
  },
  destroyed: function $beforeDestroy() {
    this.$colcade.destroy('flux');
  },
};
