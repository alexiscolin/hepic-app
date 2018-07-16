<template>
  <div id="app">
    <spriteSvg/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import spriteSvg from './components/layout/svg/Svg.vue';
import Header from './components/layout/header/Header.vue';
import Footer from './components/layout/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    spriteSvg,
    Header,
    Footer,
  },
};
</script>
