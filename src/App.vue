<template>
  <div id="app">
    <spriteSvg/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import spriteSvg from './components/layout/svg/Svg';
import Header from './components/layout/header/Header';

export default {
  name: 'App',
  components: {
    spriteSvg,
    Header,
  },
};
</script>
