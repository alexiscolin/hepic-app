import dateFormat from '@/utils/date-format';

export default {
  name: 'fluxTile',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {

    // conv date début
    getStartDate: function $getStartDate() {
      const contestDateStart = new Date(this.data.dateStart);
      return dateFormat(contestDateStart);
    },

    // conv date fin
    getEndDate: function $getEndDate() {
      const contestDateEnd = new Date(this.data.dateEnd);
      return dateFormat(contestDateEnd);
    },

    // verif fin de concours
    closeSoon: function $closeSoon() {
      const date = new Date();
      date.setDate(date.getDate() + 10); // check à 10j
      return date.getTime() >= new Date(this.data.dateEnd).getTime(); // UTC comparison
    },
  },
};
