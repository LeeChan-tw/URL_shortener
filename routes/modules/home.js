// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Link = require('../../models/link')
const generateLink = require('../../utils/generate_link')
const ROOTDOMAIN = process.env.ROOTDOMAIN || 'http://localhost'

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// 定義主功能路由
router.post('/', (req, res) => {
  const originLink = req.body.originLink
  Link.findOne({ originLink })
    .lean()
    .then(link => {
      if (link) { // 如果已經有轉換過，就調用資料庫記錄
        res.render('index', { originLink, shortenLink: link.shortenLink })
      } else { // 如果還沒轉換過，就新增
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
  const shortenLink = `${ROOTDOMAIN}/${req.params.shortenLink}`
  Link.findOne({ shortenLink })
    .lean()
    .then((link) => res.redirect(link.originLink))
})

// 匯出路由模組
module.exports = router
