<template>
  <div>
    <h3>当前最新count值为：{{ count }}</h3>
    <h3>当前最新count值为：{{ showNum }}</h3>
    <button @click="subButtonClick">-1</button>
    <button @click="subButtonClickn">-3</button>
    <button @click="subButtonClickAsync">-1 Async</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNButtonClickAsync">-3 Async</button>
    <button @click="subNAsync(5)">-5Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    subButtonClick() {
      this.sub();
    },
    subButtonClickn() {
      this.subN(3);
    },
    ...mapActions(['subAsync', 'subNAsync']),
    subButtonClickAsync() {
      this.subAsync();
    },
    subNButtonClickAsync() {
      this.subNAsync(3);
    },
  },
};
</script>
<style lang="less"></style>
