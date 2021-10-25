const path = require('path')
const express = require('express')
const router = express.Router()
const listRouter = require('./listRouter')

router.use('/', listRouter)

module.exports = router