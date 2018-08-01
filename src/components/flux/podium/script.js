export default {
  name: 'fluxPodium',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    winners: function $winners() {
      return this.data.winners.sort((a, b) => a.rank - b.rank); // tri par rank
    },
  },
};
