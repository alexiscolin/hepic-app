import contestLayout from '../layout';
import { mapState } from 'vuex'

export default {
  name: 'contestUpload',
  components: {
    contestLayout
  },
  computed: {
    ...mapState({
      contest: function(state){
        return state.contestEntry.contest
      }
    })
  }
}
