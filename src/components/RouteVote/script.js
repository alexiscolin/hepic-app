import shellApp from '@/components/AppLayout/TheShell';
import AppContestInfos from '@/components/AppLayout/AppContestInfos';
import layerPopin from '@/components/AppLayout/LayerPopin';
import sharePopin from './SharePopin';

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
      index: null,
      voted: true,
      idPhoto: null,
      indexMin: 0,
      popinAction: false,
    };
  },
  computed: {
    indexMax: function $indexMax() {
      return Math.max(0, this.$store.state.callcontest.photos.length - 1);
    },
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
    contest: function $contest() {
      const id = this.$route.params.id;
      return this.$store.getters.getContestById(id) || this.$store.state.callcontest.contest;
    },
    getId: function $getId() {
      // cas ou l'id peut être connu
      const storePhoto = this.$store.state.callcontest.photos;
      if (storePhoto.length !== 0 && this.index) return storePhoto[this.index].id;

      // id photo demandé par la route ou la première tableau
      const idPhoto = this.$route.params.photo;
      const photo1 = this.$store.state.callcontest.photos[0];
      const photoX = this.$store.getters.getContestPhotoById(idPhoto);
      // this.index = photoX ? this.$store.getters.getContestPhotoIndex(photoX) : 0;

      return idPhoto ? (photoX && parseInt(photoX.id, 10)) : photo1 && parseInt(photo1.id, 10);
    },
    displayImage: function $displayImage() {
      const photo = this.$store.state.callcontest.photos[this.index];
      this.voted = photo && photo.i_voted; // Trop de requetes, dans l'API contest si 1 vote/contest
      return photo && photo.file; // si marche pas -> passer dans un commit du store
    },
  },
  methods: {
    changeUrl: function $changeUrl(idPhoto) {
      const idContest = this.$route.params.id;
      this.url = `/contest/${idContest}/vote/${idPhoto}`;
      window.history.replaceState({}, document.title, this.url);
    },
    nextImg: function $nextImg() {
      this.index = (this.index < this.indexMax) ? this.index + 1 : this.indexMax;
      const idPhoto = this.$store.state.callcontest.photos[this.index].id;
      this.changeUrl(idPhoto);
    },
    prevImg: function $prevImg() {
      this.index = (this.index > this.indexMin) ? this.index - 1 : this.indexMin;
      const idPhoto = this.$store.state.callcontest.photos[this.index].id;
      this.changeUrl(idPhoto);
    },
    displayPopin: function $displayPopin(e) {
      this.popinAction = e;
      this.$store.commit('popinDisplay');
      this.$store.commit('hideOptin');
      const data = this.$store.state.callcontest.photos[this.index].id;
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
    const contest = this.$store.getters.getContestById(idContest);

    // recherche en cache si venu depuis le flux
    !contest && this.$store.dispatch('getContest', idContest);
    this.$store.dispatch('getPhotos', idContest).then(() => {
      // on change url pour avoir l'id photo même si inconnu après GET photos
      const idPhoto = this.getId;

      // récup de l'index au premier load depuis accès direct
      const photoX = this.$store.getters.getContestPhotoById(idPhoto);
      this.index = photoX ? this.$store.getters.getContestPhotoIndex(photoX) : 0;

      this.changeUrl(idPhoto);
    });
  },
  beforeRouteLeave: function $beforeRouteLeave(to, from, next) {
    this.$store.commit('eraseContestPhotos'); // effacer le contenu du store avant changement de page
    next();
  },
};
