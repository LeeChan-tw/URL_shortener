// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const ROOTDOMAIN = process.env.ROOTDOMAIN || 'http://localhost'
// 增加靜態檔案 圖片
app.use(express.static('public'))
// 引用路由器
const routes = require('./routes')
// 載入express-handlebars
const exphbs = require('express-handlebars')
// 引用 body-parser
const bodyParser = require('body-parser')
// 引用資料庫
require('./config/mongoose')
// 建立名為hbs的樣版引擎，傳入exphbs與相關參數
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
// 啟用引擎
app.set('view engine', 'hbs')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// 將 request 導入路由器
app.use(routes)

app.listen(PORT, (req) => {
  console.log(`App is running on ${ROOTDOMAIN}:${PORT}`)
})
