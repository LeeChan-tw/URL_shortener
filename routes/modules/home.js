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
  const shortenLink = generateLink()
  console.log(shortenLink)
  // 存入資料庫
  return Link.create({ originLink, shortenLink })
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})


// 匯出路由模組
module.exports = router
