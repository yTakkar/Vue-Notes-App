require('dotenv').config()

// Installed packages
const
  express = require('express'),
  path = require('path'),
  hbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  favicon = require('serve-favicon'),
  PORT = process.env.PORT,
  hl = require('handy-log'),
  app = express()

// Project files
const
  mRoutes = require('./routes/main-routes'),
  apiRoutes = require('./routes/api-routes')

// View Engine Setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, '/views/layout/')
}))
app.set('view engine', 'hbs')

// Middlewares
app.use(favicon(path.join(__dirname, '/public/images/favicon.jpg')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))

// Routes
app.use('/api', apiRoutes)
app.use('/', mRoutes)

app.listen(PORT, () => hl.rainbow('App running..') )
