const
  app = require('express').Router(),
  db = require('../models/db')

// GET NOTES
app.post('/get-notes', (req, res) => {
  db.query('SELECT * FROM notes ORDER BY id DESC')
    .then(s => res.json(s))
    .catch(e => console.log(e))
})

// CREATE A NOTE
app.post('/create-note', (req, res) => {
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
app.post('/note-details', (req, res) => {
  let { id } = req.body
  db.query('SELECT * FROM notes WHERE id=?', [ id ])
    .then(s => res.json(s[0]) )
    .catch(e => console.log(e) )
})

// DELETE NOTE
app.post('/delete-note', (req, res) => {
  let { id } = req.body
  db.query('DELETE FROM notes WHERE id=?', [ id ])
    .then(() => res.json({ mssg: 'Note deleted!!' }) )
    .catch(e => console.log(e) )
})

// EDIT NOTE
app.post('/edit-note', (req, res) => {
  let { id, title, content } = req.body
  db.query('UPDATE notes SET title=?, content=? WHERE id=?', [ title, content, id ])
    .then(s => res.json(s) )
    .catch(e => console.log(e) )
})

// INVALID NOTE CHECKING
app.post('/valid-note', (req, res) => {
  db.query('SELECT COUNT(id) AS count FROM notes WHERE id=? LIMIT 1', [ req.body.id ])
    .then(is => res.json(is[0].count == 1 ? true : false) )
    .catch(err => console.log(err) )
})

module.exports = app
