# URL_shortener (短網址產生器)
使用Express.js Node.js MongoDB 部署在Heroku上的短網址產生器

## 功能描述：
* 使用者可以將提供的網址“縮短”成新網址。
* 使用者可以“點擊”縮短後的網址，轉址至原提供網址。
* 使用者可以“複製”產生的新網址。

## 畫面預覽：
![畫面預覽](/public/images/readme_photo.jpg =160x150)

## 環境安裝：
1. 開啟終端機(Terminal)cd 到存放專案本機位置並執行:\ `git clone https://github.com/LeeChan-tw/URL_shortener.git`
2. 初始專案\ `cd URL_shortener  // 移動至專案目錄下` `npm install  // 安裝npm套件`
3. 啟動資料伺服器\ `./mongod --dbpath `/Users下本機的mongodb-data路徑`/mongodb-data`
4. 啟動專案\ `npm run dev // 執行app.js`

## 使用工具/套件 
* Visual Studio Code 1.52.0 - 程式碼編輯器
* Node.js 12.19.4 - 執行環境 
* Express.js 4.17.1 - Web應用架構
* MongoDB 4.2.10 - 資料庫
* Mongoose 5.10.14 - Node.js MongoDB ODM
* Nodemon 2.0.6 - Node伺服器自動重啟套件
* Express-handlebars 5.2.0 - Express頁面模板套件
* Body-parser 1.19.0 - Node資料處理中介套件


 
