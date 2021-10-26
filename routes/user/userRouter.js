const path = require('path')
const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const { Users } = require('../../schemas')

router.get('/create', async (req, res, next) => {
  try {
    // const { userid, userpw, username } = req.body
    // const user = new Users(req.body)
    const newUser = { userid: 'mmaduu3', userpw: '1234', username: '정상용' }
    const user = new Users(newUser)
    const rs = await user.save()
    res.status(200).json(rs)
  }
  catch (err) {
    next(createError(err))
  }
})

module.exports = router