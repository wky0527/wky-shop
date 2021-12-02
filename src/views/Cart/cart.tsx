import React, {FC, useEffect, useState} from "react";
import {Checkbox, List, Button, InfiniteScroll} from 'antd-mobile';
import {RightOutline} from 'antd-mobile-icons';
import './index.scss';
// import {cartList} from './data';
import cart from '../../api/cart.js';
const CartList: FC = () => {
    const [cartList,setCartList] = useState([]);
    const [hasMore,setHasMore] = useState(true);
    async function loadMore() {
       const {data:{data:{cartList}}} =  await cart.all()
        setCartList(cartList)
        setHasMore(cartList.length > 0)
    }
    useEffect(()=>{
        loadMore()
    },[])
    return (
        <div className='cart-list-wrap header-mt'>
            {
                cartList.map(item => {
                    return (
                        <div className="cart-list" key={item['id']}>
                            <List mode='card'>
                                <div className='cart-title-edit'>
                                    <Checkbox>{item['shop']}<RightOutline/></Checkbox>
                                    <span>编辑</span>
                                </div>
                                <dl>
                                    <dt>
                                        <Checkbox/>
                                        <img src={item['img']} alt=""/>
                                    </dt>
                                    <dd>
                                        <span className='cart-title-word multipleLine'>{item['title']}</span>
                                        <span className='cart-description'>
                                            <b>重量:{item['description']['weight']}kg</b>
                                            <b>颜色:{item['description']['color']}</b>
                                            <b>版本:{item['description']['edition']}</b>
                                        </span>
                                        <span>
                                            <span className='cart-price'>
                                                <b>¥{item['price']}</b>
                                            </span>
                                            <span className='cart-num'>
                                                x{item['num']}
                                            </span>
                                        </span>
                                    </dd>
                                </dl>
                            </List>
                        </div>
                    )
                })
            }
            <div className='cart-total'>
                <div className='all'>
                    <Checkbox>全选</Checkbox>
                </div>
                <div className='total'>
                    合计: <span>¥<b>0</b></span>
                    <Button  fill='none' color='primary' style={{'--border-radius': '16px','--background-color':'#ff6430'}}>
                        结算
                    </Button>
                </div>
            </div>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}
export default CartList;
