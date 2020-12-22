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
  Link.find() // 將全部資料取出
    .lean()
    .then(links => { // 比對資料陣列內物件
      const getLink = links.find(link => link.originLink === originLink)
      if (getLink) { // 如果有找到以前的Link，就抓出來顯示
        res.render('index', { originLink: getLink.originLink, shortenLink: getLink.shortenLink })
      } else { // 如果沒有就準備新增資料進資料庫
        let shortenLink
        do {
          shortenLink = generateLink() // 如果新連結存在資料庫時，迴圈在產生新連結
        } while (links.some(link => link.shortenLink === shortenLink))
        Link.create({ originLink, shortenLink }) // 將新資料放入資料庫
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
