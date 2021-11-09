import React,{useState,useEffect,FC} from "react";
import {NavLink} from 'react-router-dom';
import home from "../../api/home";
import {getImageUrl} from '../../utils/index.js';
import './index.scss';
const Footer:FC = () => {
    const [footerNav,setFooterNav] = useState([]);
    const [activeLink, setActiveLink] = useState(false);
    useEffect(()=>{
        const getFooterNav = async () => {
            try {
                const {data:{data}} = await home.navigate().then(r => r);
                setFooterNav(data)
                console.log('执行了')
            }catch (err){
                console.log(err)
            }
        }
        getFooterNav()
    },[])

    return (
        <div className='ant-mobile-footer'>
            {
                footerNav.map((item,index)=>{
                    return (
                        <NavLink
                            to={item.path}
                            exact
                            // exact={item.exact}
                            key={item.id}
                            isActive={(match,location) => {
                                match && setActiveLink(index)
                                return match
                            }}
                            className='footer-link'
                        >
                            {
                                activeLink === index ?<img src={getImageUrl(item.activeIcon)} alt='' className='footer-icon'/>:<img src={getImageUrl(item.icon)} alt='' className='footer-icon'/>
                            }
                            <span>{item.name}</span>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}
export default Footer;
