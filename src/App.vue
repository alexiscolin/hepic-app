<template>
  <div id="app">
    <sprite-svg/>
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import spriteSvg from './components/layout/svg';
import appHeader from './components/layout/header';
import appFooter from './components/layout/footer';

export default {
  name: 'App',
  components: {
    spriteSvg,
    appHeader,
    appFooter,
  },
};
</script>
