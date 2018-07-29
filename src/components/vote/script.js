import shellApp from '@/components/layout/shell';
import layerPopin from '@/components/layout//layer-popin';
import sharePopin from './share-popin';
import config from './config.json';

export default {
  name: 'vote',
  components: {
    shellApp,
    layerPopin,
    sharePopin,
  },
  data() {
    return {
      vote: config.vote,
      index: config.vote.queryIndex,
      indexMin: 0,
      indexMax: config.vote.images.length - 1,
      displayPopin: false,
    };
  },
  computed: {
    displayImage: function $displayImage() {
      return config.vote.images[this.index].src;
    },
  },
  methods: {
    nextImg: function $nextImg() {
      this.index = (this.index < this.indexMax) ? this.index + 1 : this.indexMax;
    },
    prevImg: function $prevImg() {
      this.index = (this.index > this.indexMin) ? this.index - 1 : this.indexMin;
    },
  },
};
