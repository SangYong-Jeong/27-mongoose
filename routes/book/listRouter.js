const path = require('path')
const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const Books = require('../../schemas/Books')

router.use('/create', async (req, res, next) => {
  try {
    const book = new Books({
      title: '홍길동전',
      writer: '길동이',
      content: '아버지를 아버지라...',
    })
    console.dir(new Date().getHours())
    const rs = await book.save()
    res.json(rs)
  }
  catch (err) {
    next(createError(err))
  }
})

module.exports = router