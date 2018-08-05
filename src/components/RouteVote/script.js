import shellApp from '@/components/AppLayout/TheShell';
import AppContestInfos from '@/components/AppLayout/AppContestInfos';
import layerPopin from '@/components/AppLayout/layer-popin';
import sharePopin from './share-popin';

export default {
  name: 'vote',
  components: {
    shellApp,
    AppContestInfos,
    layerPopin,
    sharePopin,
  },
  data() {
    return {
      vote: this.$store.state.callcontest.photos,
      url: this.$route.fullPath,
      index: 0,
      indexMin: 0,
      indexMax: Math.max(0, this.$store.state.callcontest.photos.length - 1), // load sans photo
      popinAction: false,
    };
  },
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
    contest: function $contest() {
      const id = this.$route.params.id;
      return this.$store.getters.getContestById(id) || this.$store.getters.getContest;
    },
    getId: function $getId() {
      // id photo demandé par la route ou la première tableau
      const idPhoto = this.$route.params.photo;
      const photo1 = this.$store.state.callcontest.photos[0];
      const photoX = this.$store.getters.getContestPhotoById(idPhoto);
      this.index = photoX ? this.$store.getters.getContestPhotoIndex(photoX) : 0;

      return idPhoto ? (photoX && parseInt(photoX.id, 10)) : photo1 && parseInt(photo1.id, 10);
    },
    displayImage: function $displayImage() {
      const photo = this.$store.state.callcontest.photos[this.index];
      return photo && photo.file; // si marche pas -> passer dans un commit du store
    },
  },
  methods: {
    nextImg: function $nextImg() {
      this.index = (this.index < this.indexMax) ? this.index + 1 : this.indexMax;
    },
    prevImg: function $prevImg() {
      this.index = (this.index > this.indexMin) ? this.index - 1 : this.indexMin;
    },
    displayPopin: function $displayPopin(e) {
      this.popinAction = e;
      this.$store.commit('popinDisplay');
      this.$store.commit('hideOptin');
      const data = {};
      if (e === 1) {
        this.$store.commit('displayOptin', {
          reqText: 'Valider le vote',
          cbText: 'Vote comptabilisé !',
          type: 'votePhoto',
          central: true, // zone d'affichage centrale
          data,
        });
      }
    },
  },
  created: function $created() {
    const idContest = this.$route.params.id;
    let contest = this.$store.getters.getContestById(idContest);

    // recherche en cache si venu depuis le flux
    if (!contest) {
      this.$store.dispatch('getContest', idContest).then((res) => {
        contest = res.data;
      });
    }

    this.$store.dispatch('getPhotos', idContest).then(() => {
      // on change url pour avoir l'id photo même si inconnu après GET photos
      const idPhoto = this.getId;
      this.url = `/contest/${idContest}/vote/${idPhoto}`;
      window.history.replaceState(null, null, this.url);
    });
  },
  beforeRouteLeave: function $beforeRouteLeave(to, from, next) {
    this.$store.commit('eraseContestPhotos'); // effacer le contenu du store avant changement de page
    next();
  },
};
