const findRepositories = require('../controllers/findRepositories')

module.exports = app => {

  app.post('/repositories', async (req, res) => {
    const search = req.body.input
    const repositories = await findRepositories({search}) 
    res.json(repositories)
  })

  app.post('/bookmarksRepositories', async (req, res) => {
    const searchBookMarks = req.body.input

  })

  app.post('/createBookmarksRepositories/', async (req, res) => {
    const createBookmarks = req.body.input

    const bookmarks = Object.keys(createBookmarks).map(id => id)

    res.json(bookmarks)
  })
}
