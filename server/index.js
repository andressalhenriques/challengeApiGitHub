const customExpress = require('./config/customExpress')

const app = customExpress()

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))