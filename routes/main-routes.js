const app = require('express').Router()

// UNIVERSAL RENDERING OF ALL FILES [MUST BE THE LAST ROUTE]
app.get('*', (req, res) => {
  res.render('app')
})

module.exports = app
