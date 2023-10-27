// importing packages dependencies
require('dotenv').config()
const express = require('express');
const app = express();
const appRoot = require('app-root-path')
const path = require('path')
const PORT = process.env.PORT || 8000
// const routes = path.join(appRoot.toString(),'routes','routes.js');
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const { User } = require('./models')
const { Role } = require('./models')
const { Op } = require('sequelize')
const {generateOTP} = require('./helpers/generateOTP')
const otp = generateOTP();
console.log(otp)
const { json2CSV } = require('./helpers/jsonToDoc');
const { json2PDF } = require('./helpers/jsonToDoc');
const fileHandle  = require('./middlewares/fileHandle');



app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)


// const role1 =  Role.create({ role : "guest"})
// const role2 =  Role.create({ role : "user"})
// const role3 =  Role.create({ role : "admin"})
app.use('/api/upload', fileHandle, (req, res) => {
  console.log('uploaded success')
})


app.get('/login', (req, res) => {
  res.render('partials/login')
})

app.get('/forgotPass', (req, res) => {
  res.render('partials/forgotPass')
})

app.get('/otpVerify', (req, res) => {
  res.render('partials/otpVerify')
})

app.get('/resetPass', (req, res) => {
  res.render('partials/resetPass')
})


app.get('/register', (req, res) => {
  res.render('partials/register')
})

app.get('/getfile', async (req, res) => {
  const allUsers = await User.findAll({ where: { u_status: { [Op.eq]: 1 } } });
  let data = JSON.parse(JSON.stringify(allUsers))
  json2CSV(data, 'MyCsv');
  json2PDF(data, 'MyPdf');
  // console.log( JSON.parse(JSON.stringify(allUsers)))
})
// let date = new Date( Date.now() + 300000 ).getMinutes()
// console.log(date)




// PORT listening
app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});
