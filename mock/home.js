const Mock = require('mockjs');
const express = require('express');
const router = express.Router();
router.use("/all", (req,res)=>{
    const data = Mock.mock({
        swiper: ['http://www.ftsucai.com/demo/202102/appmb010/themes/img/banner/news-banner1.jpg',
                'http://www.ftsucai.com/demo/202102/appmb010/themes/img/banner/news-banner2.jpg',
                'http://www.ftsucai.com/demo/202102/appmb010/themes/img/banner/news-banner3.jpg',
                'http://www.ftsucai.com/demo/202102/appmb010/themes/img/banner/news-banner1.jpg'
                ],
        data: [],
        entry: [
            {
                title: '每日签到',
                icon: 'icon-qiandao',
                 bgColor: 'rgb(88,180,240)'
            },
            {
                title: '限时抢购',
                icon: 'icon-qiandao',
                bgColor: 'rgb(226,97,92)'

            },
            {
                title: '分享领券',
                icon: 'icon-qiandao',
                bgColor: 'rgb(88,180,240)'

            },
            {
                title: '会员专享',
                icon: 'icon-qiandao',
                bgColor: 'rgb(226,97,92)'

            },
            {
                title: '每日签到',
                icon: 'icon-qiandao',
                bgColor: 'rgb(88,180,240)'

            },
            {
                title: '限时抢购',
                icon: 'icon-qiandao',
                bgColor: 'rgb(226,97,92)'

            },
            {
                title: '分享领券',
                icon: 'icon-qiandao',
                bgColor: 'rgb(88,180,240)'

            },
            {
                title: '会员专享',
                icon: 'icon-qiandao',
                bgColor: 'rgb(226,97,92)'
            }
        ],
        active: {image:'https://www.jq22.com/demo/appmoban201912191034/images/hotit.png',title:'商城开业狂欢！四重大礼等你来抢！'}

    })
    return res.json(data)
})
router.use("/navigation",(req,res)=>{
    const data = Mock.mock({
        data: [
            {
                id: 1,
                name: '首页',
                path: '/home',
                exact: true,
                icon: 'f01.png',
                activeIcon: 'f1.png',
            },
            {
                id:2,
                name: '分类',
                path: '/category',
                exact: false,
                icon: 'f05.png',
                activeIcon: 'f5.png'
            },
            {
                id:3,
                name: '发现',
                path: '/found',
                exact: false,
                icon: 'f02.png',
                activeIcon: 'f2.png'
            },
            {
                id:4,
                name: '购物车',
                path: 'cart',
                exact: false,
                icon: 'f03.png',
                activeIcon: 'f3.png'
            },
            {
                id:5,
                name: '我的',
                path: 'my',
                exact: false,
                icon: 'f04.png',
                activeIcon: 'f4.png'
            }
        ]
    })
    return res.json(data)
})
module.exports = router;
