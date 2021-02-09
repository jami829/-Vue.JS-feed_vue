import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // data
    isChecked: [
      { id: 1, checked: true },
      { id: 2, checked: true },
      { id: 3, checked: true }
    ],
    orderedDesc: []
  },

  mutations: {
    saveChecked: function (state, payload) {
      state.isChecked = payload
    },
    reverseFeeds: function (state, payload) {
      state.orderedDesc = payload
    }
  },
  getters: {
    descFeeds: state => {
      return state.orderedDesc.slice().reverse()
    }
  },
  actions: {

  },


  // plugins: [createPersistedState()]


})