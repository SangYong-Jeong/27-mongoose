const path = require('path')
const express = require('express')
const router = express.Router()

router.use('/create', (req, res, next) => {
  res.send('Book')
})

module.exports = router