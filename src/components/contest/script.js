import config from './config.json';
import dateFormat from '@/utils/date-format';
import layerPopin from '@/components/layout/layer-popin';
import validationRules from './validation-rules';

export default {
  name: 'brandContest',
  components: {
    layerPopin,
    validationRules
  },
  data() {
    return {
      contest: config.contest,
      displayPopin: false,
    };
  },
  computed: {
    getStartDate: function(){
      const contestDateStart = new Date(this.contest.dateStart);
      return  dateFormat(contestDateStart);
    },

    // conv date fin
    getEndDate: function(){
      const contestDateEnd = new Date(this.contest.dateEnd);
      return dateFormat(contestDateEnd);
    },
  },
}
