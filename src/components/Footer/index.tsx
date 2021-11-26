import React,{useState,useEffect,FC} from "react";
import {NavLink} from 'react-router-dom';
import navigation from "../../api/navigation .js";
import {getImageUrl} from '../../utils/index.js';
import './index.scss';
const Footer:FC = () => {
    const [footerNav,setFooterNav] = useState([]);
    const [activeLink, setActiveLink] = useState();
    useEffect(()=>{
        const getFooterNav = async () => {
            try {
                const {data:{data}} = await navigation.navigate();
                setFooterNav(data.navigation)
            }catch (err){
                console.log(err)
            }
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
