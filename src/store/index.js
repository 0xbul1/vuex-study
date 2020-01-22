import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  // 作用 修改state的数据，只有mutations中定义的函数，才有权利修改state的数据
  mutations: {
    // mutation不写异步代码，写在action里
    add(state) {
      state.count++;
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    },
  },
  // 异步修改mutations
  // actions中不能直接修改state的数据，必须通过context.commit()触发某个mutations
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add');
      }, 100);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step);
      }, 100);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub');
      }, 100);
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step);
      }, 100);
    },
  },
  //对state数据包装修饰，不会修改
  getters: {
    showNum(state){
      return `当前最新的数量${state.count}`
    }
  },
  modules: {},
});
