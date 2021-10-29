import React, {FC} from "react";
import {Image, List} from 'antd-mobile';
import {UnorderedListOutline,PayCircleOutline,SetOutline} from 'antd-mobile-icons'
import './index.scss';

const MyList: FC = () => {
    const getImageUrl = (icon:string) => {
        return new URL(`../../assets/images/${icon}`, import.meta.url).href
    }
    return (
        <div className='my-list-wrap'>
            <div className="my-header">
                <dl>
                    <dt>
                        <Image
                            src='https://img1.baidu.com/it/u=3840315013,3995777941&fm=26&fmt=auto'
                            width={64}
                            height={64}
                            fit='cover'
                            style={{borderRadius: 32}}
                        />
                    </dt>
                    <dd>
                        <h3>可可</h3>
                        <p>成年人的崩溃往往就在一瞬间</p>
                    </dd>
                </dl>
            </div>
            <div className="my-order">
                <List>
                    <List.Item
                        extra='查看全部订单'
                        onClick={() => {
                        }}
                    >
                        我的订单
                    </List.Item>
                </List>
                <div className="my-order-detail">
                    <a href="javascript:;">
                        <img src={getImageUrl('substitutePay.jpg')} alt=""/>
                        <span>代付款</span>
                    </a>
                    <a href="javascript:;">
                        <img src={getImageUrl('collectGoods.jpg')}  alt=""/>
                        <span>待收货</span>
                    </a>
                    <a href="javascript:;">
                        <img src={getImageUrl('generationEvaluation.jpg')} alt=""/>
                        <span>待评价</span>
                    </a>
                    <a href="javascript:;">
                        <img src={getImageUrl('refund.jpg')} alt=""/>
                        <span>退款/售后</span>
                    </a>
                </div>
            </div>
            <div className="my-content">
                <List>
                    <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
                        账单
                    </List.Item>
                    <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
                        总资产
                    </List.Item>
                    <List.Item prefix={<SetOutline />} onClick={() => {}}>
                        设置
                    </List.Item>
                </List>
            </div>
        </div>
    )
}
export default MyList
