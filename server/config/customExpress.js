const express = require('express')
const consign =  require('consign')
const { urlencoded } = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../src/swagger.json')

module.exports = () => {
  const app = express()
  
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  consign()
    .include('routes')
    .into(app);


    return app
}