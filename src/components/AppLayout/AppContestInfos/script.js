export default {
  name: 'AppContestInfos',
  props: {
    logo: {
      type: String,
      required: true,
    },
    brand: {
      type: Number,
      required: false,
    },
    brandName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
};
