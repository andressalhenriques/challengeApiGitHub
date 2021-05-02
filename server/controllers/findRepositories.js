
const axios = require('axios')

module.exports = async ({
  search,
}) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${search}`)

    return response.data.items.map((repository) => {
      const repositories = {
        id: repository.id,
        repositoryName: repository.name,
        language: repository.language,
        name:repository.owner.login,
        star: repository.stargazers_count,
        fork: repository.forks,
        url: repository.html_url,
      }
      return repositories
    })
  } catch (error) {
    throw error
  }
}