import actions from '../actions/notes-a'

export default {
  state: {
    notes: []
  },
  mutations: {
    getNotes: (state, payload) => state.notes = payload,
    createNote: (state, payload) => state.notes.unshift(payload),
    deleteNote: (state, payload) => {
      let n = state.notes.filter(e => e.id != payload )
      state.notes = n
    },
    editNote: (state, payload) => {
      let { id, title, content } = payload
      let n = state.notes.map(e => {
        if(e.id == id){
          e.title = title
          e.content = content
        }
        return e
      })
      state.notes = n
    }
  },
  actions,
}
