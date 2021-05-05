const findRepositories = require('../controllers/findRepositories')
const findBookmarksRepositories = require('../controllers/findBookmarksRepositories')
const express = require('express')

const router = express.Router()

router.post('/repositories', async (req, res) => {
  const search = req.body.input
  const repositories = await findRepositories({search}) 
  res.json(repositories)
})

router.post('/bookmarksRepositories', async (req, res) => {
  const searchBookMarks = req.body.input
  const repositories = await findBookmarksRepositories({searchBookMarks}) 
  res.json(repositories)
})

router.post('/createBookmarksRepositories/', async (req, res) => {
  const createBookmarks = req.body.input
  const bookmarks = Object.keys(createBookmarks).map(id => id)
  res.json(bookmarks)
})

module.exports = router