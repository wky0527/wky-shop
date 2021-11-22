import React,{FC} from "react";
import Header from "../../components/Header";
import { SearchOutline } from 'antd-mobile-icons';
import Found from '../Found/index';
import {Image,Toast} from 'antd-mobile';
import './index.scss';
import {getImageUrl} from "../../utils";

const SignIn:FC = () => {
    const icon = <SearchOutline />
    return (
        <div className='sign-in-wrap'>
            <Header title='签到领豆' rightTitle={icon}/>
           <div className='sign-in-image'  onClick={() =>
               Toast.show({
                   icon: 'success',
                   content: '签到成功！',
                   afterClose: () => {
                       console.log('签到成功')
                   },
               })
           }>
               <Image src={getImageUrl('sign.png')} width={100} height={100}/>
           </div>
           <div className='sign-in-found'>
               <Found />
           </div>
        </div>
    )
}
export default SignIn
