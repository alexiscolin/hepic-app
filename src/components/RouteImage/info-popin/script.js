import AppContestInfos from '@/components/AppLayout/AppContestInfos';

export default {
  name: 'infoPopin',
  props: {
    logo: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    profile: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    AppContestInfos,
  },
  computed: {
    isMyProfile: function $myProfile() {
      return parseInt(this.profile, 10) === parseInt(JSON.parse(localStorage.getItem('user-data')).profile_id, 10);
    },
  },
  methods: {
    displayOptin: function $displayOptin() {
      const data = { id: this.id };
      this.$store.commit('displayOptin', {
        reqText: 'Supprimer et quitter le concours',
        cbText: 'Supprimé !',
        type: 'deletePhoto',
        data,
      });
    },
  },
};
