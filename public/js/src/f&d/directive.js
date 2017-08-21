import Vue from 'vue'

Vue.directive('title', {
  inserted: el => document.title = el.dataset.title,
  update: el => document.title = el.dataset.title
})
