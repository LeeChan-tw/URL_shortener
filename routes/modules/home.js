// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Link = require('../../models/link')
const generateLink = require('../../utils/generate_link')
const ROOTDOMAIN = process.env.ROOTDOMAIN || 'http://localhost:3000'

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { originLink } = req.body
  Link.find()
    .lean()
    .then(links => {
      const getLink = links.find(link => link.originLink === originLink)
      if (getLink) { // 如果還沒轉換過，就啟動generateLink函式來新增一筆
        res.render('index', { originLink: getLink.originLink, shortenLink: getLink.shortenLink })
      } else {
        let shortenLink
        do {
          shortenLink = generateLink()
        } while (links.some(link => link.shortenLink === shortenLink))
        Link.create({ originLink, shortenLink })
          .then(() => res.render('index', { originLink, shortenLink }))
          .catch(error => console.log('Error', error))
      }

})
})

router.get('/:shortenLink', (req, res) => {
  const shortenLink = `${ROOTDOMAIN}/${req.params.shortenLink}`
  Link.findOne({ shortenLink })
    .then(link => {
      if (!link) return
      res.redirect(link.originLink)
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router
