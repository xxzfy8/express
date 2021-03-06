var express = require('express');
var app = express();
var router = express.Router();
var swig = require('swig');

var bodyParser = require('body-parser');

app.set('view cache', false);
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use('/static', express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:1000
}))

router.get('/', function(req, res, next) {
    // req 请求的信息
    // res 相应的信息
    // next 继续执行下一步 
    console.log(req.query)
    // res.send('这是第一个页面1')
    res.render('index', {
        title: "Express"
    })
})

router.post('/login', function(req, res, next) {
    var body = req.body;
    console.log(body)
})
router.get('/test1', function(req, res, next) {
    res.send('hello word')
})
app.use('/', router);

app.listen(8086, function() {
    console.log('服务已经启动了，端口是8086')
})