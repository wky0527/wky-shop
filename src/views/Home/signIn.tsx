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
               <img src="https://img0.baidu.com/it/u=4286852716,36948324&fm=26&fmt=auto" alt=""/>
           </div>
           <div className='sign-in-found'>
               <Found />
           </div>
        </div>
    )
}
export default SignIn
