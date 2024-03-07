const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

app.get('/fetch-product', async (req, res) => {
  const productUrl = req.query.url

  if (!productUrl) {
    return res.status(400).send({ error: 'No URL provided' })
  }

  try {
    const response = await axios.get(productUrl)
    const $ = cheerio.load(response.data)

    // 假设您知道如何在页面上找到价格和图片，这里是示例选择器
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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
