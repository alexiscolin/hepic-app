import config from './config.json';

export default {
  name: 'vote',
  data() {
    return {
      vote: config.vote,
    };
  },
};
