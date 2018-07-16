<template>
  <div id="app">
    <spriteSvg/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import spriteSvg from './components/layout/svg/Svg';
// import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

export default {
  name: 'App',
  components: {
    spriteSvg,
    // Header,
    Footer,
  },
};
</script>
