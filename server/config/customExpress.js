const express = require('express')
const consign =  require('consign')
const { urlencoded } = require('express')
const cors = require('cors')

module.exports = () => {
  const app = express()
  
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  consign()
    .include('routes')
    .into(app);


    return app
}