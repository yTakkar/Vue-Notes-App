import Vue from 'vue'
import Vuex from 'vuex'

import Notes from './modules/notes-m'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    notes: Notes
  }
})

export default store
