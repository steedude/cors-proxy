const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const router = express.Router()

router.get('/', async (req, res) => {
  const productUrl = req.query.url

  if (!productUrl) {
    return res.status(400).send({ error: 'No URL provided' })
  }

  try {
    const response = await axios.get(productUrl)
    const $ = cheerio.load(response.data)

    const price = $('#price').text()
    const imageUrl = $('#product-image').attr('src')

    res.json({
      price,
      imageUrl,
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Error fetching product data' })
  }
})

module.exports = router
