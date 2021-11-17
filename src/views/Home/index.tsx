import React, {FC, useState, useEffect} from "react";
import Footer from "../../components/Footer";
import {Swiper,Grid,InfiniteScroll,Search} from 'antd-mobile';
import {navList, activeList, hotSaleList} from './data';
import './index.scss';
// import home from '../../api/home.js';
import Icon from '../../components/Icon';
const Home: FC = () => {
    const [swiper,setSwiper] = useState([]);
    const [entry,setEntry] = useState([]);
    const [list,setList] = useState([]);
    const [hasMore,setHasMore] = useState(true);
    const [scrollColor,setScrollColor] = useState(false)
    async function loadMore() {
        // const {data}  = await home.all();
        await fetch('/backend/home/all').then(res=>{
            return res.json()
        }).then(data=>{
            const {swiper,entry,list} = data.data;
            setSwiper(swiper);
            setEntry(entry);
            setList(list);
            setHasMore(data.length > 0)
        })
    }
    window.onscroll = ()=>{
        if(document.documentElement.scrollTop > 0) {
            setScrollColor(true)
        }else {
            setScrollColor(false)
        }
    }
    useEffect(() => {
        loadMore()
    },[])
    return (
        <div className= "adm-home-wrap">
            wky
            <div className= {scrollColor ? 'adm-search-wrap-active': 'adm-search-wrap'}>
                <Search placeholder='请输入内容' showCancelButton />
            </div>
            <Swiper autoplay>
                {
                    swiper.map((item,index)=>{
                        return (
                            <Swiper.Item key={index}>
                                <img src={item} alt=""/>
                            </Swiper.Item>
                        )
                    })
                }
            </Swiper>
            <div className="home-nav">
                <Grid columns={4} gap={8}>
                    {
                        entry.map((item, index) => {
                            return (
                                <Grid.Item key={index}>
                                    <a href="#" className='adm-grid-row-item'>
                                        <div className='icon-bg' style={{background: item['bgColor']}}>
                                            <Icon type={item['icon']} />
                                        </div>
                                        <span>{item['title']}</span>
                                    </a>
                                </Grid.Item>
                            )
                        })
                    }
                </Grid>
            </div>
                <div className="home-content">
                    <ul>
                        {
                            activeList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p className='home-all-title'><img src={item.titleImg}
                                                                           className='home-titleImg'/><span>{item.titleIntroduce}</span>
                                        </p>
                                        <div className='home-list'>
                                            {
                                                item.list.map((item, index) => {
                                                    return (
                                                        <dl key={index}>
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
                <div className='home-hot-sale'>
                    <div className="hot-title">
                        <span>热卖单品</span>
                    </div>
                    <div className="hot-content">
                        {
                            hotSaleList.map((item, index) => {
                                return (
                                    <dl key={index}>
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
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            <Footer></Footer>
        </div>
    )
}
export default Home
