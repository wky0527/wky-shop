import React, {FC, useEffect, useState} from "react";
import Header from "../../components/Header";
import {SearchOutline} from 'antd-mobile-icons';
import { Card, Toast, Button ,List,Image} from 'antd-mobile'
import {Tabs} from 'antd-mobile';
import my from '../../api/my.js';
import './index.scss';
const MyOrder: FC = () => {
    const icon = <SearchOutline/>
    const [order,setOrder] = useState([]);
    const tabTitle = [
        {
            title: '全部',
            key: '1',
        },
        {
            title: '待付款',
            key: '2'
        },
        {
            title: '待发货',
            key: '3'
        },
        {
            title: '待收货',
            key: '4'
        },
        {
            title: '评价',
            key: '5'
        }
    ]
    async  function getMyOrder(){
        const {data:{data:{data}}} =  await my.order();
        setOrder(data)
    }
    useEffect(()=>{
        getMyOrder()
    },[])
    return (
        <div className='my-order-wrap'>
            <Header rightTitle={icon} title='我的订单'/>
            <div className='header-mt'>
                <Tabs>
                    {
                        tabTitle.map((item,index)=>{
                            return (
                                <Tabs.Tab title={item.title} key={item.key}>
                                    {
                                        order.map((item:any,index)=>{
                                            return (
                                               <Card title={item.orderTime} extra={item.status}>
                                                   <List>
                                                      <List.Item
                                                          prefix={
                                                          <Image
                                                              src={item.img}
                                                              fit='cover'
                                                              width={72}
                                                              height={72}
                                                          />
                                                          }
                                                          description={
                                                              <div>
                                                                  <p>{item.title}</p>
                                                                  <div className='my-order-description'>
                                                                     <p>
                                                                         <span className='my-order-price'>¥{item.price}</span><span className='my-order-prePrice'>¥{item.prePrice}</span>
                                                                     </p>
                                                                      <p className='my-order-num'>
                                                                          x{item.num}
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                          }
                                                      >
                                                      </List.Item>
                                                   </List>
                                                   <div className="my-order-footer" onClick={e => e.stopPropagation()}>
                                                       {
                                                           item.operation.map((item:any,index:number)=>{
                                                              return (
                                                                  <Button key={index}
                                                                      onClick={() => Toast.show('点击了底部按钮')}
                                                                  >
                                                                      {item}
                                                                  </Button>
                                                              )
                                                           })
                                                       }

                                                   </div>
                                               </Card>
                                            )
                                        })
                                    }
                                </Tabs.Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}
export default MyOrder;
