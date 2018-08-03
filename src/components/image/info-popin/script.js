import AppContestInfos from '@/components/layout/AppContestInfos';

export default {
  name: 'infoPopin',
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
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    AppContestInfos,
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
