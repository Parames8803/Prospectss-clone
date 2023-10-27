const fs = require('fs')
const multer = require('multer')
const form = multer({ dest: 'P:/Projects/Practice/rolemvc/server/docs/' })

const fileHandle = (req, res, next) => {
  form.array('files')(req, res, (err) => {
    if (err) console.log(err)
    // The uploaded file can be accessed via req.file
    const files = req.files
    // console.log(files[0].originalname)
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const oldPath = file.path
      const newPath = `P:/Projects/Practice/rolemvc/server/docs/${file.originalname}`
      fs.rename(oldPath, newPath, (err) => {
        if (err) return console.log(err)
      })
    }
    next()
  });
}

module.exports = fileHandle;