import socialSharing from 'vue-social-sharing';
import AppContestInfos from '@/components/AppLayout/AppContestInfos';

export default {
  name: 'sharePopin',
  components: {
    AppContestInfos,
    socialSharing,
  },
  props: {
    logo: {
      type: String,
      required: false, // a changer en true
    },
    brand: {
      type: Number, // a changer String
      required: false, // a changer en true
    },
    brandName: {
      type: String, // a changer String
      required: false, // a changer en true
    },
    desc: {
      type: String,
      required: false, // a changer en true
    },
    url: {
      type: String,
      required: false, // a changer en true
    },
    id: {
      type: Number,
      required: false, // a changer en true
    },
  },
  data() {
    return {
      title: 'photo du concours',
    };
  },
  computed: {
    currentUrl: function $currentUrl() {
      return `https://${window.location.hostname}${(window.location.port && ':') + window.location.port + this.url}`;
    },
  },
  methods: {
    displayOptin: function $displayOptin() {
      const data = { id: this.id };
      this.$store.commit('displayOptin', {
        reqText: 'Signaler cette photo', // texte du btn
        cbText: 'Photo signalée!', // texte de restitution
        type: 'signalPhoto', // type d'action
        central: false, // zone d'affichage
        data, // data à transmettre API
      });
    },
  },
};
