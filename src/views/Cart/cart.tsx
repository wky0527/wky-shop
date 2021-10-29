import React, {FC} from "react";
import {Checkbox, List, Tag,Button} from 'antd-mobile';
import {RightOutline} from 'antd-mobile-icons';
import './index.scss';
import {cartList} from './data';

const CartList: FC = () => {
    return (
        <div className='cart-list-wrap'>
            {
                cartList.map(item => {
                    return (
                        <div className="cart-list" key={item.id}>
                            <List mode='card'>
                                <Checkbox>{item.shop}<RightOutline/></Checkbox>
                                <div className="active-title">
                                    <Tag color='red' fill='outline'>
                                        跨店满减
                                    </Tag>
                                    <span>{item.active}</span>
                                    <span>凑单<RightOutline/></span>
                                </div>
                                <dl>
                                    <dt>
                                        <Checkbox/>
                                        <img src={item.img} alt=""/>
                                    </dt>
                                    <dd>
                                        <p>{item.title}</p>
                                        <p>
                                            <Tag color='red' fill='outline'>
                                                {item.tag}
                                            </Tag>
                                        </p>
                                        <p>
                                            <span className='cart-price'>
                                                ¥<b>{item.price}</b>
                                            </span>
                                            <span className='cart-num'>
                                                x{item.num}
                                            </span>
                                        </p>
                                    </dd>
                                </dl>
                            </List>
                        </div>
                    )
                })
            }
            <div className='cart-total'>
                <p>
                    <Checkbox>全选</Checkbox>
                </p>
                <p>
                    合计: <span>¥<b>0</b></span>
                    <Button  fill='none' color='primary' style={{'--border-radius': '16px','--background-color':'#ff6430'}}>
                        结算
                    </Button>
                </p>
            </div>
        </div>

    )
}
export default CartList;
