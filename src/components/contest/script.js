import config from './config.json';
import dateFormat from '@/utils/date-format';
import layerPopin from '@/components/layout/layer-popin';

export default {
  name: 'brandContest',
  components: {
    layerPopin
  },
  data() {
    return {
      contest: config.contest,
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
  }
}
