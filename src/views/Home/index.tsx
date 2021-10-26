import React, {FC, useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Swiper} from 'antd-mobile';
import {navList, activeList,hotSaleList} from './data';
import './index.scss';

const Home: FC = () => {
    const getImageUrl = (imgSrc: string) => {
        return new URL(`../../assets/images/${imgSrc}`, import.meta.url).href
    }
    return (
        <>
            <Header title= '首页'/>
            <Swiper autoplay>
                <Swiper.Item>
                    <div style={{background: '#ace0ff'}} className='content'>
                        1
                    </div>
                </Swiper.Item>
                <Swiper.Item>
                    <div style={{background: '#bcffbd'}} className='content'>
                        2
                    </div>
                </Swiper.Item>
                <Swiper.Item>
                    <div style={{background: '#e4fabd'}} className='content'>
                        3
                    </div>
                </Swiper.Item>
                <Swiper.Item>
                    <div style={{background: '#ffcfac'}} className='content'>
                        4
                    </div>
                </Swiper.Item>
            </Swiper>
            <div className='home-main'>
                <div className="home-nav">
                    <ul>
                        {
                            navList.map((item, index) => {
                                return (
                                    <li>
                                        <img src={getImageUrl(item.imgSrc)} alt=''/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="home-content">
                    <ul>
                        {
                            activeList.map((item, index) => {
                                return (
                                    <li>
                                        <p className='home-all-title'><img src={item.titleImg}
                                                                           className='home-titleImg'/><span>{item.titleIntroduce}</span>
                                        </p>
                                        <div className='home-list'>
                                            {
                                                item.list.map((item, index) => {
                                                    return (
                                                        <dl>
                                                            <dt><img src={item.img} alt=""/></dt>
                                                            <dd>
                                                                <p className='home-title'>{item.smallTitle}</p>
                                                                <p className='home-introduce'>{item.introduce}</p>
                                                            </dd>
                                                        </dl>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='home-recommend'>
                    <img src="https://img.alicdn.com/simba/img/TB1pIQFjbr1gK0jSZR0SuvP8XXa.jpg" alt=""/>
                </div>
                <div className='home-hot-sale'>
                    <div className="hot-title">
                        <span>热卖单品</span>
                    </div>
                    <div className="hot-content">
                        {
                            hotSaleList.map((item,index)=>{
                                return (
                                    <dl>
                                        <dt>
                                            <img src={item.detailImg} alt=""/>
                                        </dt>
                                        <dd>
                                            <p>{item.title}</p>
                                             <p>
                                                 <span>¥{item.price}</span>
                                                 <span>销量：{item.salesVolume}</span>
                                             </p>
                                        </dd>
                                    </dl>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Home;
