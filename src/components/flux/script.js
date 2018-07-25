import Colcade from 'colcade';
import shellApp from '@/components/layout/shell';
import config from './config.json';
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
      contests: config.contests,
      gridColcade: null,
    };
  },
  mounted: function $mounted() {
    const elem = document.querySelector('.o-grid');
    this.gridColcade = elem && new Colcade(elem, { columns: '.grid-col', items: '.o-tile-grided' });
  },
  destroyed: function $beforeDestroy() {
    this.gridColcade.destroy();
  },
};
