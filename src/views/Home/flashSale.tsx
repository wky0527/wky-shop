import React, {FC, useEffect, useState} from "react";
import Header from "../../components/Header";
import {SearchOutline} from "antd-mobile-icons";
import {InfiniteScroll, JumboTabs, List,Image,NoticeBar} from "antd-mobile";
import {flashSaleData} from '../../../mock/home/index';
import './index.scss';

const flashSale: FC = () => {
    const icon = <SearchOutline/>
    const [hasMore, setHasMore] = useState(true);
    const [flashSale, setFlashSale] = useState([]);

    async function loadMore() {
        setFlashSale(flashSaleData);
        setHasMore(Object.keys(flashSaleData).length > 0)
    }

    useEffect(() => {
        loadMore()
    }, [])
    return (
        <div className='flash-sale-wrap header-mt'>
            <Header title='限时抢购' rightTitle={icon}/>
            <JumboTabs defaultActiveKey='1'>
                {
                    flashSale.map((item:any) => {
                        return (
                            <JumboTabs.Tab  className="TabPane" title={item['time']} key={item['id']}
                                           description={item['status']}>
                                <List>
                                    <NoticeBar content='还有商品的哦！可以继续抢购的哦！' color='alert' closeable />
                                    {
                                        item.data.map((items:any, index:number) => {
                                            return (
                                                <List.Item
                                                    key={index}
                                                    title={items['title']}
                                                    description={<div className='flash-sale-list'><span className='flash-sale-price'>¥{items['price']}</span><span className='flash-sale-prePrice'>¥{items['prePrice']}</span></div>}
                                                    prefix={ <Image
                                                        src={items['img']}
                                                        style={{ borderRadius: 20 }}
                                                        fit='cover'
                                                        width={80}
                                                        height={80}
                                                    />}
                                                    extra={<span className='flash-sale-remain'>仅剩{items['remainNum']}件</span>}
                                                >
                                                </List.Item>
                                            )
                                        })
                                    }
                                </List>
                            </JumboTabs.Tab>
                        )
                    })
                }
            </JumboTabs>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
        </div>
    )
}
export default flashSale
