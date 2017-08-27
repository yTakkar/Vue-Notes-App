import axios from 'axios'

const actions = {
  GET_NOTES: context => axios.post('/api/get-notes').then(s => context.commit('getNotes', s.data)),
  CREATE_NOTE: (context, payload) => context.commit('createNote', payload),
  DELETE_NOTE: (context, payload) => context.commit('deleteNote', payload),
  EDIT_NOTE: (context, payload) => context.commit('editNote', payload)
}

export default actions
