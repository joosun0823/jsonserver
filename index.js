var express = require('express')
var cors = require('cors')
const fs = require("fs")
var bodyParser = require('body-parser')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/abc', function (req, res) {
    const jsonData = fs.readFileSync("./test.json");
    res.send( JSON.parse(jsonData) );
})

app.post('/insert', function (req, res) {
    const jsonData = fs.writeFileSync("./test.json", JSON.stringify(req.body));
    res.send( "성공" );
})


app.listen(3030)