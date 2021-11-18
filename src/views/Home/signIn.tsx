import React,{FC} from "react";
import Header from "../../components/Header";
import { SearchOutline } from 'antd-mobile-icons';
import Found from '../Found/index';
import './index.scss';
const SignIn:FC = () => {
    const icon = <SearchOutline />
    return (
        <div className='sign-in-wrap'>
            <Header title='签到领豆' rightTitle={icon}/>
           <div className='sign-in-image'>
               <img src="http://m.ftsucai.com/demo/202102/appmb010/themes/img/icon/icon-sign.png" alt=""/>
           </div>
           <div className='sign-in-found'>
               <Found />
           </div>
        </div>
    )
}
export default SignIn
