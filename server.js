const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/',function(req,res){
    res.status(200).sendFile(__dirname + '/assets/index.html')
    console.log('\nConnected to the webapp !\n')
})

app.use('/',express.static(__dirname + '/assets'))

app.get('/:file',function(req,res){
    file = req.params.file
    pathURL = __dirname + '/assets/' + file + '.html'
    res.status(200).sendFile(pathURL)
})

console.log('\nServer launched !')
app.listen(PORT)
console.log("Listening on " + PORT)
