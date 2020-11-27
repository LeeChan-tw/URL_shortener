// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Link = require('../../models/link')
const generateLink = require('../../utils/generate_link')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// 定義首頁路由
router.post('/', (req, res) => {
  // 用解構賦值寫法從 req.body 拿出表單裡的資料
  const originLink = req.body.originLink
  Link.findOne({ originLink })
    .lean()
    .then(link => {
      if (link) {
        res.render('index', { originLink, shortenLink: link.shortenLink })
      } else {
        const shortenLink = generateLink
        Link.create({ originLink, shortenLink })
          .then((link) => {
            res.render('index', { originLink: link.originLink, shortenLink: link.shortenLink })
          })
      }
    })
    .catch(error => console.log(error))
})

router.get('/:shortenLink', (req, res) => {
  const shortenLink = `http://localhost:3000/${req.params.shortenLink}`
  Link.findOne({ shortenLink })
    .lean()
    .then((link) => res.redirect(link.originLink))
})

// 匯出路由模組
module.exports = router
