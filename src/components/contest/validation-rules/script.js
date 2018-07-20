export default {
  name: 'validation-rules',
  props: {
    logo: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    rules: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      rulesAccepted: false,
    }
  },
  methods: {
    confirm: function(){
      this.rulesAccepted && this.$router.push('/contest/upload');
    },
  },
}
