var express = require('express')
var fs = require('fs');
var app = express();

var port = 7001;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    // res.send('welcome to cross-domain rss proxy.')
    res.render('index',{
        host:req.headers['host']
    });
});
/**
 * browser version detect and show the not support alert !
 */
app.get('/api/:version?/:info?', function (req, res) {
    // res.send('welcome to cross-domain rss proxy.')
    // req.headers:
    // {
    //     "accept": "text/html, application/xhtml+xml, image/jxr, */*",
    //     "accept-language": "zh-CN",
    //     "user-agent": "Mozilla/4.0(compatible; MSIE 7.0; Windows NT 6.0)",
    //     "accept-encoding": "gzip, deflate",
    //     "host": "localhost:7001",
    //     "connection": "Keep-Alive",
    //     "cache-control": "no-cache",
    //     "cookie": "_ga=GA1.1.287096140.1487061313"
    // }

    res.type('.js');

    var header = req.headers;
    var agent = header['user-agent'];
    var host = header['host'];
    var index = agent.indexOf('MSIE');
    var isIe = index >= 0;
   

    var none = false;

    if (isIe) {

        var ieVersion = agent.substring(index + 5, index + 6);
        var version = req.params.version;
        log('ieversion:'+ieVersion+",paramversion:"+version);
        if (parseInt(ieVersion) <= parseInt(version)) {
            //res.json(header);
            var info = req.params.info;
            res.send(getJs(host, version,info));
        }else{
            none = true;
        }
    } else {
        none = true;
    }
    if (none) {
        res.send(';');
    }


});

app.listen(port, function () {
    log('Not Support IE Alert listening on port ' + port);
})


function getJs(host, version,info) {
    version = version || '';
    host = host || 'http://ciyuer.com:7001';
    info = info || "To get the best experience using our website , we recommend that you use a different web browser.";
    var js = fs.readFileSync('public/js/response.js', "utf-8");
    js = js.replace('nsiehost', 'nsiehost = "http://' + host + '"')
    js = js.replace('nsieversion', 'nsieversion = "' + version + '"')
    js = js.replace('nsieinfo', 'nsieinfo = "' + info + '"')
    return js;
}

function log(str) {
    str = typeof(str) == 'string' ? str : JSON.stringify(str);
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