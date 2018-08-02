import shellApp from '@/components/layout/shell';
import layerPopin from '@/components/layout/layer-popin';
import dateFormat from '@/utils/date-format';
import contestLayout from './layout';
import validationRules from './validation-rules';

export default {
  name: 'brandContest',
  components: {
    shellApp,
    contestLayout,
    layerPopin,
    validationRules,
  },
  data() {
    return {
      displayPopin: false,
    };
  },
  computed: {
    // données en cache depuis le flux ou req
    contest: function $contest() {
      const id = this.$route.params.id;
      return this.$store.getters.getContest(id) || this.$store.state.callcontest.contest;
    },

    // conv date deb
    getStartDate: function $getStartDate() {
      const contestDateStart = new Date(this.contest.dateStart);
      return dateFormat(contestDateStart);
    },

    // conv date fin
    getEndDate: function $getEndDate() {
      const contestDateEnd = new Date(this.contest.dateEnd);
      return dateFormat(contestDateEnd);
    },
  },
  created: function $created() {
    const idContest = this.$route.params.id;
    let contest = this.$store.getters.getContest(idContest);

    if (!contest) {
      this.$store.dispatch('getContest', idContest).then((res) => {
        contest = res.data;
      });
    }
  },
  beforeRouteLeave: function $beforeRouteLeave(to, from, next) {
    to.name !== 'Vote' && this.$store.commit('eraseContest'); // effacer le contenu du store avant changement de page
    next();
  },
};
