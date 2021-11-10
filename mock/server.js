const express = require('express');//导入express框架
const app = express();//初始化express
const router = express.Router();
const bodyParser = require('body-parser');//解析json数据格式
app.get('/',function (req,res){
    res.send('hello world')
})
//首页路由
router.use("/home",require('./home'));
app.use('/api',router);
app.use(bodyParser.urlencoded({//此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}))
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})
app.listen(3002,()=>{
   console.log('请求成功')
})
