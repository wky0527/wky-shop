import React,{FC} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyList from "./my";
import './index.scss';
import {SetOutline} from 'antd-mobile-icons';
const My: FC = () => {
    const icon = <SetOutline />
    return (
        <div className='my-wrap'>
            <Header rightTitle={icon}/>
            <MyList/>
            <Footer/>
        </div>
    )
}
export default My;
