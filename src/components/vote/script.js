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
  created: function $created() {
    document.querySelector('meta[property="og:image"]').setAttribute('content', 'ttps://d33wubrfki0l68.cloudfront.net/bc95c7d6560235789878c5c33ee1577703e0931e/d1dd7/assets/img/profil/plage.png');
  },
};
