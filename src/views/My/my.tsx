import React, {FC, useState} from "react";
import {Card, List,Image,Divider} from 'antd-mobile';
import Icon from "../../components/Icon";
import FoundList from '../Found/list';
import {useHistory} from 'react-router-dom';
import './index.scss';

const MyList: FC = () => {
    const history = useHistory();
    const demoSrc = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';
    const headerList= [
        {
            num: 98,
            title: '收藏'
        },
        {
            num: 78,
            title: '关注'
        },
        {
            num: 99,
            title: '足迹'
        },
        {
            num: 65,
            title: '分享'
        }
    ]
    const orderList = [
        {
            icon: 'icon-daifukuan',
            title: '待付款'
        },
        {
            icon: 'icon-31daifahuo',
            title: '待发货'
        },
        {
            icon: 'icon-daishouhuo',
            title: '待收货'
        },
        {
            icon: 'icon-daipingjia01',
            title: '待评价'
        },
        {
            icon: 'icon-tuihuotuikuan',
            title:'退款/售后'
        }
    ]
    return (
        <div className='my-list-wrap'>
            <div className="my-header">
                <Card>
                    <dl>
                        <dt>
                            <Image
                                src={demoSrc}
                                width={64}
                                height={64}
                                fit='cover'
                                style={{ borderRadius: 4 }}
                            />
                        </dt>
                        <dd>
                            <h3>文章同学</h3>
                             <div>
                                 <ul>
                                     {
                                         headerList.map((item,index)=>{
                                             return (
                                                 <li key={index}>
                                                     <span>{item.num}</span>
                                                     <p>{item.title}</p>
                                                 </li>
                                             )
                                         })
                                     }
                                 </ul>
                             </div>
                        </dd>
                    </dl>
                </Card>
            </div>
            <div className="my-order">
                <List>
                    <List.Item
                        extra='查看全部订单'
                        onClick={() => {
                            history.push('/myOrder')
                        }}
                    >
                        我的订单
                    </List.Item>
                </List>
                <div className="my-order-detail">
                    {
                        orderList.map((item,index)=>{
                            return (
                                <div className="my-order-entry" onClick={()=>{history.push('/myOrder')}} key={index}>
                                    <Icon type={item.icon}/>
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='my-recommended'>
                <Divider
                    style={{
                        color: '#ff5e3e',
                        borderColor: '#ff1679',
                        borderStyle: 'dashed',
                    }}
                >
                    为你推荐
                </Divider>
                <FoundList id={1}/>
            </div>
        </div>
    )
}
export default MyList
