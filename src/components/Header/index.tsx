import React from "react";
import {NavBar,Toast} from "antd-mobile";
import './index.scss';
interface propsType {
    backTitle?: any,//返回按钮文字
    backArrow?: Boolean,//是否显示返回区域的箭头
    leftTitle?: String,//左侧内容
    rightTitle?: String//右侧内容
    title?: String,//标题
}
const Header  = ({backTitle,backArrow,leftTitle,rightTitle,title}:propsType) => {
    const back = () => {
        Toast.show({
            content: '点击了返回区域',
            duration: 1000,
        })
    }
    return (
            <NavBar back={backTitle} backArrow={backArrow || false} left={leftTitle} right={rightTitle} onBack={back} >
                {title}
            </NavBar>
    )
}
export default Header
