import React from "react";
import {NavBar,Toast} from "antd-mobile";
import Icon from "../Icon";
import './index.scss';
interface propsType {
    backTitle?: any,//返回按钮文字
    backArrow?: Boolean,//是否显示返回区域的箭头
    leftTitle?: String,//左侧内容
    rightTitle?: String//右侧内容
    title?: any,//标题
}
const Header  = ({backTitle,backArrow,leftTitle,rightTitle,title}:propsType) => {
    const back = () => {
        Toast.show({
            content: '点击了返回区域',
            duration: 1000,
        })
    }
    const icon = <Icon type={'icon-62'}/>
    return (
            <NavBar back={backTitle} backArrow={backArrow} left={leftTitle} right={rightTitle || icon} onBack={back} >
                {title}
            </NavBar>
    )
}
export default Header
