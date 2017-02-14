var express = require('express')
var app = express()

var port = 7001;

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    // res.send('welcome to cross-domain rss proxy.')
    res.render('index');
});

app.listen(3000, function () {
  log('Not Support IE Alert listening on port '+port);
})


function log(str) {
    console.log(getTime() + " | " + str);
}

function getTime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDay();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    var sec = date.getSeconds();
    sec = sec < 10 ? '0' + sec : sec;
    return y + '-' + m + '-' + d + " " + h + ":" + min + ":" + sec
}