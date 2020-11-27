const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  originLink: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  shortenLink: {
    type: String // 資料型別是字串
  }
})

linkSchema.path('originLink').validate((val) => {
  const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return urlRegex.test(val)
}, 'Invalid URL form.')

module.exports = mongoose.model('Link', linkSchema)
