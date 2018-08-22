import AppContestInfos from '@/components/AppLayout/AppContestInfos';

export default {
  name: 'infoPopin',
  props: {
    photoData: {
      type: Object,
      required: true,
    },
    rank: {
      type: Number,
      required: false,
    },
  },
  components: {
    AppContestInfos,
  },
  computed: {
    isMyProfile: function $myProfile() {
      return parseInt(this.photoData.profile, 10) === parseInt(JSON.parse(localStorage.getItem('user-data')).profile_id, 10);
    },
  },
  methods: {
    displayOptin: function $displayOptin() {
      const data = { id: this.photoData.idPhoto };
      this.$store.commit('displayOptin', {
        reqText: 'Supprimer et quitter le concours',
        cbText: 'Supprimé !',
        type: 'deletePhoto',
        data,
      });
    },
  },
};
