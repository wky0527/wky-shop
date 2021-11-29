import React, {FC} from "react";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import {Image,Button} from 'antd-mobile'
import {getImageUrl} from '../../utils/index.js';
import './index.scss';
const icon = <Icon type='icon-zhuanfa'/>
const shareCoupon: FC = () => {

    return (
        <>
            <Header title='邀请好友，我得奖' rightTitle={icon}/>
            <div className='coupon-wrap header-mt'>
                <Image src='https://img0.baidu.com/it/u=3482353980,1142497141&fm=26&fmt=auto'/>
                <Image src={getImageUrl('coupon-icon.jpeg')}></Image>
                <Image src={getImageUrl('coupon-icon.jpeg')} className='coupon-image'></Image>
                <div className='coupon-wrap-footer'>
                    <Button color='danger' >邀请通讯录好友</Button>
                    <Button color='warning'>邀请好友</Button>
                </div>
            </div>
        </>
    )
}
export default shareCoupon
