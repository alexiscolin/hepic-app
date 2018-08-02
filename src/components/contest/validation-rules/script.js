export default {
  name: 'validation-rules',
  // props: {
  //   logo: {
  //     type: String,
  //     required: true,
  //   },
  //   brand: {
  //     type: Number, // string
  //     required: true,
  //   },
  //   desc: {
  //     type: String,
  //     required: true,
  //   },
  //   rules: {
  //     type: String,
  //     required: false,
  //   },
  //   ban: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props: ['logo', 'desc', 'brand', 'rules', 'ban'],
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
      this.rulesAccepted && this.$router.push(`/contest/${this.$route.params.id}/upload`);
    },
  },
};
