import Notes from '../components/notes/notes.vue'
import CreateNote from '../components/notes/create-note.vue'
import ViewNote from '../components/notes/view-note.vue'
import Overlay from '../components/others/overlay.vue'
import notFound from '../components/others/404.vue'

export default [
  {
    path: '/',
    redirect: '/notes'
  },
  {
    path: '/notes',
    component: Notes,
    children: [
      {
        path: 'create-note',
        components: {
          'create-note': CreateNote,
          'overlay': Overlay
        }
      },
      {
        path: 'view-note/:id',
        name: 'view-note',
        components: {
          'view-note': ViewNote,
          'overlay': Overlay
        }
      },
      {
        path: 'view-note',
        redirect: '/notes'
      }
    ]
  },
  {
    path: '*',
    component: notFound
  }
]
