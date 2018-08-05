import Colcade from 'colcade';
import { mapState } from 'vuex';
import shellApp from '@/components/AppLayout/TheShell';
import fluxTile from './tile';
import fluxPodium from './podium';

export default {
  name: 'mainFlux',
  components: {
    shellApp,
    fluxTile,
    fluxPodium,
  },
  data() {
    return {
      gridColcade: null,
    };
  },
  computed: mapState({
    contests: state => state.callcontest.all,
  }),
  created: function $created() {
    this.PgetContests = this.$store.dispatch('getContests');
  },
  mounted: function $mounted() {
    const elem = document.querySelector('.o-grid');
    Promise.all([this.PgetContests]).finally(() => {
      this.gridColcade = elem && new Colcade(elem, { columns: '.grid-col', items: '.o-tile-grided' });
    });
  },
  destroyed: function $beforeDestroy() {
    this.gridColcade.destroy();
  },
};
