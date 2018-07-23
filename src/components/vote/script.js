import config from './config.json';

export default {
  name: 'vote',
  data() {
    return {
      vote: config.vote,
      index: 0,
      indexMin: 0,
      indexMax: config.vote.images.length - 1,
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
