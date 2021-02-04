//gives us access to variable in our .env file
require ('dotenv').config()

// //see variables using process.env
// console.log(process.env)
// console.log(process.env.API_KEY)
const express = require('express')
const app = express() //invoke express by adding the ()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

//MiddleWare
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))

//Routes
app.get("/", (req, res)=> {
    res.send('hello')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening on ${PORT}`))

