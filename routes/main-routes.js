const
  app = require('express').Router(),
  db = require('../models/db')

// GET NOTES
app.post('/api/get-notes', (req, res) => {
  db.query('SELECT * FROM notes ORDER BY id DESC')
    .then(s => res.json(s))
    .catch(e => console.log(e))
})

// CREATE A NOTE
app.post('/api/create-note', (req, res) => {
  let { title, content } = req.body
  let insert = {
    title,
    content,
    time: new Date().getTime()
  }
  db.query('INSERT INTO notes SET ?', insert)
    .then(s => res.json(Object.assign({}, insert, { id: s.insertId })) )
    .catch(e => console.log(e) )
})

// GET NOTE DETAILS
app.post('/api/note-details', (req, res) => {
  let { id } = req.body
  db.query('SELECT * FROM notes WHERE id=?', [ id ])
    .then(s => res.json(s[0]) )
    .catch(e => console.log(e) )
})

// DELETE NOTE
app.post('/api/delete-note', (req, res) => {
  let { id } = req.body
  db.query('DELETE FROM notes WHERE id=?', [ id ])
    .then(s => res.json({ mssg: 'Note deleted!!' }) )
    .catch(e => console.log(e) )
})

// EDIT NOTE
app.post('/api/edit-note', (req, res) => {
  let { id, title, content } = req.body
  db.query('UPDATE notes SET title=?, content=? WHERE id=?', [ title, content, id ])
    .then(s => res.json(s) )
    .catch(e => console.log(e) )
})

// UNIVERSAL RENDERING OF ALL FILES [MUST BE THE LAST ROUTE]
app.get('*', (req, res) => {
  res.render('app')
})

module.exports = app
