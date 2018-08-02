import shellApp from '@/components/layout/shell';
import layerPopin from '@/components/layout//layer-popin';
import sharePopin from './share-popin';

export default {
  name: 'vote',
  components: {
    shellApp,
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
      displayedPopin: false,
    };
  },
  computed: {
    getId: function $getId() {
      // id photo demandé par la route ou la première tableau
      const idPhoto = this.$route.params.photo;
      const photo1 = this.$store.state.callcontest.photos[0];
      const photoX = this.$store.getters.getContestPhoto(idPhoto);
      this.index = photoX ? this.$store.getters.getContestPhotoIndex(photoX) : 0;

      return idPhoto ? (photoX && photoX.id) : photo1 && photo1.id;
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
      this.displayedPopin = e;
      this.$store.commit('hideOptin');
    },
  },
  created: function $created() {
    this.$store.dispatch('getPhotos', this.$route.params.id).then(() => {
      // on change url pour avoir l'id photo même si inconnu après GET photos
      const idContest = this.$route.params.id;
      const idPhoto = this.getId;
      this.url = `/contest/${idContest}/vote/${idPhoto}`;
      window.history.replaceState(null, null, this.url);
    });
  },
};
