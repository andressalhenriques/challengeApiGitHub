
const axios = require('axios')
const Promise = require("bluebird");

module.exports = async ({
  searchBookMarks,
}) => {
  try {
    const repo = await Promise.map(
      searchBookMarks,
      async (bookmark) => {
        const response = await axios.get(`https://api.github.com/repositories/${bookmark}`)
        const repositories = {
          id: response.data.id,
          repositoryName: response.data.name,
          language: response.data.language,
          name:response.data.owner.login,
          star: response.data.stargazers_count,
          fork: response.data.forks,
          url: response.data.html_url,
        }
        return repositories
      }
    )
      return repo
  } catch (error) {
    throw error
  }
}