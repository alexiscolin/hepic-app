import Colcade from 'Colcade';

export default {
  name: 'tilesFlux',
  data() {
    return {
      msg: 'Hello tout le monde !',
    };
  },
  mounted: function(){
    const elem = document.querySelector('.o-grid');
    let colc = elem && new Colcade( elem, { columns: '.grid-col', items: '.o-tile-grided'});
  }
}
