const findRepositories = require('../controllers/findRepositories')

module.exports = app => {
  app.get('/repositories', (req, res) => {
    res.send('Hello')
  })


  app.post('/repositories', async (req, res) => {
    console.log(req.body)
    const search = req.body.name
    const repositories = await findRepositories({search, res})
    return repositories
  })

}