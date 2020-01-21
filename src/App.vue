<template>
  <div id="app">
    <addition></addition>
    <p>-----------------------</p>
    <subtraction></subtraction>
  </div>
</template>
<script>
import Addition from './components/Addition.vue';
import Subtraction from './components/Subtraction.vue';
export default {
  data() {
    return {};
  },
  components: {
    Addition,
    Subtraction,
  },
};
</script>
<style scoped>
#app {
  width: 500px;
  margin: 200px auto;
}
</style>
