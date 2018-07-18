import config from './config.json';

export default {
  name: 'brandContest',
  data() {
    return {
      contest: config.contest,
    };
  },
}
