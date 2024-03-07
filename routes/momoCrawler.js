const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  console.log(req.query.url)
  return res.json({
    resultCode: 200,
  })
})

module.exports = router
