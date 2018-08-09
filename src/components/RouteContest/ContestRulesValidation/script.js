export default {
  name: 'validation-rules',
  props: {
    logo: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: false,
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
        brandName: this.brandName,
        logo: this.logo,
        desc: this.desc,
        ban: this.ban,
        id: this.id,
        agreement: this.rulesAccepted || false,
      });
      this.rulesAccepted && this.$router.push(`/contest/${this.$route.params.id}/upload`);
    },
  },
};
