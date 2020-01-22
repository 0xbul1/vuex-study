<template>
  <div>
    <h3>当前最新count值为：{{ $store.state.count }}</h3>
    <h3>当前最新count值为：{{ $store.getters.showNum }}</h3>
    <button @click="addButtonClick">+1</button>
    <button @click="addButtonClickn">+3</button>
    <button @click="addButtonClickAsync">+1 Async</button>
    <button @click="addnButtonClickAsync">+n Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addButtonClick() {
      this.$store.commit('add');
    },
    addButtonClickn() {
      // commit 作用就是调用某个mutation函数
      this.$store.commit('addN', 3);
    },
    addButtonClickAsync() {
      // dispatch函数,专门触发action
      this.$store.dispatch('addAsync');
    },
    addnButtonClickAsync() {
      this.$store.dispatch('addNAsync', 3);
    },
  },
};
</script>
<style lang="less"></style>
