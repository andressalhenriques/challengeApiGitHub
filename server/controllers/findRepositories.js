
const axios = require('axios')

module.exports = async ({
  search,
  res
}) => {
  try {
    const repositories = await axios.get(`https://api.github.com/search/repositories?q=${search}`)
    console.log(search, repositories.data)
    return res.json(repositories.data)
  } catch (error) {
    throw error
  }
}