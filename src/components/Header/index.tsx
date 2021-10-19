import React from "react";
import './index.scss';
interface propsType {
    title: String,
    leftContent?: any,
    rightContent?: any
}
const Header  = ({title,leftContent,rightContent}:propsType) => {
    return (
        <div className='ant-mobile-header'>
            <div className="left-operation">
                {leftContent}
            </div>
            <div className="center-title">
                {title}
            </div>
            <div className="right-operation">
                {rightContent}
            </div>
        </div>
    )
}
export default Header
