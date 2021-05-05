const express = require('express')
const { urlencoded } = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const swaggerFile = require('./src/swagger.json')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(require('./routes/repositories'))


const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))

