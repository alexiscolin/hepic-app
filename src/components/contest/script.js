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
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },

    // règles du concours
    rules: function $rules() {
      return this.$store.state.callcontest.rules.content;
    },

    // données en cache depuis le flux ou req
    contest: function $contest() {
      const id = this.$route.params.id;
      return this.$store.getters.getContestById(id) || this.$store.getters.getContest;
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
    let contest = this.$store.getters.getContestById(idContest);

    // récup contest API si pas de cache
    if (!contest) {
      this.$store.dispatch('getContest', idContest).then((res) => {
        contest = res.data;
      });
    }

    // récupération des règles
    this.$store.dispatch('getContestRules', idContest);
  },
  beforeRouteLeave: function $beforeRouteLeave(to, from, next) {
    to.name !== 'Vote' && this.$store.commit('eraseContest'); // effacer le contenu du store avant changement de page
    to.name !== 'Upload' && this.$store.commit('eraseAgreement'); // effacer potentiel validation de participation avant départ du contest
    next();
  },
};
