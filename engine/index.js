const express = require('express')
const app = express()
const cors = require('cors')
const router = require('../engine/router')
const api = require('../engine/api')

app.use(api)
app.use(router)
app.use(cors())
app.use(express.json())
module.exports = app;
