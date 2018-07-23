export default {
  name: 'validation-rules',
  props: {
    logo: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    ban: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rulesAccepted: false,
    };
  },
  methods: {
    confirm: function $confirm() {
      this.$store.commit({
        type: 'populateState',
        brand: this.brand,
        logo: this.logo,
        desc: this.desc,
        ban: this.ban,
        agreement: this.rulesAccepted || false,
      });
      this.rulesAccepted && this.$router.push('/contest/upload');
    },
  },
};
