<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';
import { Viewer } from 'cesium';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {
  private mounted(): void {
    this.$nextTick(() => {
        const viewer = new Viewer('app');
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.cesium-viewer {
  position: absolute !important;
}
</style>
