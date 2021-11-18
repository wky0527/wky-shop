import React,{useState,useEffect,FC} from "react";
import {NavLink} from 'react-router-dom';
// import home from "../../api/home";
import {getImageUrl} from '../../utils/index.js';
import {navigationData} from "../../../mock/home";
import './index.scss';
const Footer:FC = () => {
    const [footerNav,setFooterNav] = useState([]);
    const [activeLink, setActiveLink] = useState();
    useEffect(()=>{
        const getFooterNav = async () => {
            // try {
            //     // const {data:{data}} = await home.navigate().then(r => r);
            //     await fetch('/backend/home/navigation').then(res=>{
            //         return res.json();
            //     }).then(data=>{
            //         console.log(data)
            //         setFooterNav(data.data)
            //     })
            // }catch (err){
            //     console.log(err)
            // }
            setFooterNav(navigationData)
        }
        getFooterNav()
    },[])

    return (
        <div className='ant-mobile-footer'>
            {
                footerNav.map((item,index:any)=>{
                    return (
                        <NavLink
                            to={item['path']}
                            exact
                            key={item['id']}
                            isActive={(match:any) => {
                                match && setActiveLink(index)
                                return match
                            }}
                            className='footer-link'
                        >
                            {
                                activeLink === index ?<img src={getImageUrl(item['activeIcon'])} alt='' className='footer-icon'/>:<img src={getImageUrl(item['icon'])} alt='' className='footer-icon'/>
                            }
                            <span>{item['name']}</span>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}
export default Footer;
