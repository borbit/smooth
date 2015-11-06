module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index/index')
  })

  app.get('/rate', (req, res) => {
    res.render('rate/rate')
  })
}