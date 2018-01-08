module.exports = {
  createJsonFromDir: createJsonFromDir
}

const fs = require('fs')
// const glob = require('glob')
// const path = require('path')
var iconv = require('iconv-lite')

function createJsonFromDir (pathOfExcel, distPath) {
  let data = fs.readFileSync(pathOfExcel)
  var buffer = iconv.decode(data, 'gbk')
  var string = buffer.toString()
  var lineList = string.split('\r\n')
  let list = []
  for (var i in lineList) {
    var itemList = lineList[i].split(',')
    list.push(itemList)
  }
  let obj = {content: []}
  obj.content = list
  let json = JSON.stringify(obj, 'utf8')
  fs.writeFile(distPath + 'test.json', json, function (err) {
    if (err) {
      throw err
    }
  })
}
// // 获取所有的json文件
// function getExcelFile (excelPath) {
//   let files = glob.sync(path.join(excelPath, '*.xls'))
//   let excelFiles = []
//   files.forEach((file) => {
//     excelFiles.push(file)
//   })
//
//   return excelFiles
// }
//
// // 将所有的md文件转换成json文件
// function createJsonFromDir (excelPath, distPath) {
//   let excelFiles = getExcelFile(excelPath)
//   let fileArr = []
//
//   if (!fs.existsSync(distPath)) {
//     fs.mkdirSync(distPath)
//   }
//
//   for (let file of excelFiles) {
//     let dataObj = fs.readFileSync(file, 'utf8')
//     fileArr.push(dataObj)
//     console.log(dataObj)
//   }
//
//   for (let i = 0; i < fileArr.length; i++) {
//     let json = JSON.stringify(fileArr[i], 'utf8')
//     excelFiles[i] = excelFiles[i].replace('xls', '.json')
//     excelFiles[i] = path.basename(excelFiles[i])
//
//     fs.writeFile(distPath + excelFiles[i], json, function (err) {
//       if (err) {
//         throw err
//       }
//     })
//   }
// }
