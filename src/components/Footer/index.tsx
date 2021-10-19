import React,{useState,useEffect} from "react";
import {NavLink} from 'react-router-dom';
import './index.scss';
const Footer = () => {
    const [footerNav,useFooterNav] = useState([
        { path: "/", exact: true, icon: "home.jpg", name: "首页" },
        { path: "/category", exact: false, icon: "category.jpg", name: "分类" },
        { path: "/info", exact: false, icon: "info.jpg", name: "消息" },
        { path: "/cart", exact: false, icon: "cart.jpg", name: "购物车" },
        { path: "/my", exact: false, icon: "my.jpg", name: "我的" }
    ])
    useEffect(()=>{

    })

    const getImageUrl = (icon:string) => {
        return new URL(`../../assets/images/${icon}`, import.meta.url).href
    }
    return (
        <div className='ant-mobile-footer'>
            {
                footerNav.map((item,index)=>{
                    return (
                        <NavLink
                            to={item.path}
                            exact={item.exact}
                            key={index}
                            className='footer-link'
                        >
                            <img src={getImageUrl(item.icon)} alt='' className='footer-icon'/>
                            <span>{item.name}</span>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}
export default Footer;
