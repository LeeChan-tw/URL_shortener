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
  console.log('shortenLink:', shortenLink)
  Link.findOne()
    .or([{ originLink }, { shortenLink }])
    .lean()
    .then(link => {
      console.log('Boolean:', Boolean(link))
      console.log('originLink:', originLink)
      console.log('shortenLink:', shortenLink)
      console.log('1st:', link)
      if (!link) { // 如果已經有轉換過，就調用資料庫記錄
        Link.create({ originLink, shortenLink })
          .then(link => {
            console.log('Create Link:', link)
            res.render('index', { originLink, shortenLink })
          })
          .catch(error => console.log(error))
      } else if (link.originLink === originLink) { // 如果還沒轉換過，就啟動generateLink函式來新增一筆資料
        console.log('Find originLink:', link)
        console.log('Find originLink:', link.shortenLink)
        res.render('index', { originLink: link.originLink, shortenLink: link.shortenLink })
      } else if (link.shortenLink === shortenLink) {
        let checkDupe
        do {
          shortenLink = generateLink()
          checkDupe = link.shortenLink === shortenLink
          console.log(link.shortenLink)
          console.log(shortenLink)
        } while (checkDupe)
        Link.create({ originLink, shortenLink })
          .then(link => {
            console.log('Create Link:', link)
            res.render('index', { originLink, shortenLink })
          })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log('Error', error))
})
/*
// 定義主功能路由
router.post('/', (req, res) => {
  const originLink = req.body.originLink // 先抓住表單送出的網址
  Link.findOne({ originLink }) // 再以該網址於資料庫內搜尋
    .lean() // 調整資料格式
    .then(link => {
      console.log('1st:', link)
      if (link) { // 如果已經有轉換過，就調用資料庫記錄
        res.render('index', { originLink, shortenLink: link.shortenLink })
      } else { // 如果還沒轉換過，就啟動generateLink函式來新增一筆資料
        let shortenLink = generateLink
        Link.findOne({ shortenLink }) // 再以該網址於資料庫內搜尋
          .lean() // 調整資料格式
          .then(link => {
            console.log('2st:', link)
            if (link) { // 如果曾經使用過，就再次調動generateLink函式來新增一筆資料
              shortenLink = generateLink
            } else { // 如果未曾使用過，就以此為新資料
              Link.create({ originLink, shortenLink })
                .then(link => {
                  res.render('index', { originLink: link.originLink, shortenLink: link.shortenLink })
                })
            }
          })
      }
    })
    .catch(error => console.log(error))
})
*/

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
