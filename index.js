var express = require('express')
var expressState = require('express-state')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var engines = require('consolidate')
var config = require('config')

var app = express()
app.set('strict routing', false)
app.set('views', 'public/pages')
app.set('state namespace', 'app')
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.enable('trust proxy')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(config.assets_dir_path))
app.use(express.static(config.assets_dist_dir_path))
app.use(express.static(config.public_dir_path))
expressState.extend(app)

try {
  var manifest = require(config.dist_manifest_path)
} catch(e) {
  var manifest = {}
}

app.locals.asset = (src) => {
  if (manifest[src]) {
    return `/dist/${manifest[src]}`
  }
  return `/${src}`
}

var routes = [
  require('routes/index')
]

routes.forEach((route) => {
  route(app)
})

app.use(function(err, req, res, next) {
  res.status(500)
  res.json({
    error: err.message
  })
})

app.listen(config.port, null, (err) => {
  if (err) throw err

  console.log('Application server started on', {
    host: config.host,
    port: config.port
  })
})