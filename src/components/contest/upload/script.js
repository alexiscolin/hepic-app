import contestLayout from '../layout';

export default {
  name: 'contestUpload',
  components: {
    contestLayout
  },
  data(){
    return {
      contest: {
        brand: this.$route.query.brand
      }
    }
  },
}
