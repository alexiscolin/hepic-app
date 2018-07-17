import dateFormat from '@/utils/date-format';

export default {
  name: 'fluxTile',
  props: ['data'],
  computed: {

    // conv date début
    getStartDate: function(){
      const contestDateStart = new Date(this.data.dateStart);
      return  dateFormat(contestDateStart);
    },

    // conv date fin
    getEndDate: function(){
      const contestDateEnd = new Date(this.data.dateEnd);
      return dateFormat(contestDateEnd);
    },

    // verif fin de concours
    closeSoon: function(){
      const date = new Date();
      date.setDate(date.getDate() + 10); // check à 10j
      return date.getTime() >= new Date(this.data.dateEnd).getTime(); // UTC comparison
    }
  }
}
