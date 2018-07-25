import shellApp from '@/components/layout/shell';
import layerPopin from '@/components/layout/layer-popin';
import dateFormat from '@/utils/date-format';
import config from './config.json';
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
      contest: config.contest,
      displayPopin: false,
    };
  },
  computed: {

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
};
