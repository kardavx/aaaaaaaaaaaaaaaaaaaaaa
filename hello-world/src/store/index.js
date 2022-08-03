import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ExampleModule from '../modules/ExampleModules.js'

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    namespaced: true,
    test: ExampleModule,
  }
})
