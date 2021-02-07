import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // data
    options: {
      params: {
        page: 1,
        ord: "asc",
        limit: 10,
        category: [1, 2, 3],
      },
    },
  },
  getters: {  // computed

  },
  mutations: {

  },
  actions: {

  }
})