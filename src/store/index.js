import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // data
    isChecked: [
      { id: 1, checked: true },
      { id: 2, checked: false },
      { id: 3, checked: true }
    ]
  },

  mutations: {
    saveChecked: function (state, payload) {
      state.isChecked = payload
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})