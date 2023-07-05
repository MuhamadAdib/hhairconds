const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.use('/public',express.static('public'))

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/' , function(req,res){
    //res.send('Server Is Running')
   res.sendFile(path.join(__dirname,'public/index'))
})

app.listen(5000)