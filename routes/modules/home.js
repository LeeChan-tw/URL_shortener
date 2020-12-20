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
  let shortenLink = generateLink()
  Link.findOne()
    .or([{ originLink }, { shortenLink }])
    .lean()
    .then(link => {
      console.log('1st:', link)
      if (!link) { // 如果還沒轉換過，就啟動generateLink函式來新增一筆
        Link.create({ originLink, shortenLink })
          .then(link => {
            res.render('index', { originLink, shortenLink })
          })
          .catch(error => console.log(error))
      } else if (link.originLink === originLink) { // 如果已經有輸入過此原網址，就調用資料庫記錄資料
        res.render('index', { originLink: link.originLink, shortenLink: link.shortenLink })
      } else if (link.shortenLink === shortenLink) { // 如果已經有產生過此短網址，就重新產生短網址，再新增此筆資料
        let checkDupe
        do {
          shortenLink = generateLink()
          checkDupe = link.shortenLink === shortenLink
        } while (checkDupe)
        Link.create({ originLink, shortenLink })
          .then(link => {
            res.render('index', { originLink, shortenLink })
          })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log('Error', error))
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
