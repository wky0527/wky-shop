import React, {useState,useEffect} from "react";
import {NavBar,Toast} from "antd-mobile";
import Icon from "../Icon";
import './index.scss';
interface propsType {
    backTitle?: any,//返回按钮文字
    backArrow?: Boolean,//是否显示返回区域的箭头
    leftTitle?: String,//左侧内容
    rightTitle?: any//右侧内容
    title?: any,//标题
    customBack?(): void //方法
}
const Header  = ({backTitle,backArrow,leftTitle,rightTitle,title,customBack}:propsType) => {
    const icon = <Icon type={'icon-62'}/>
    const onBack = () => {
        history.back();
    }
    return (
           <NavBar back={backTitle} backArrow={backArrow} left={leftTitle} right={rightTitle || icon} onBack={customBack || onBack} >
                {title}
            </NavBar>
    )
}
export default Header
