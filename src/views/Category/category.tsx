import React, {FC, useEffect, useState} from "react";
import {Tabs} from 'antd';
// import home from "../../api/home";
import {InfiniteScroll,Grid} from "antd-mobile";
import {homeAllData} from "../../../mock/home";
const CategoryList: FC = () => {
    const {TabPane} = Tabs;
    const [hasMore, setHasMore] = useState(true);
    const [category, setCategory] = useState([]);

    async function loadMore() {
      // //  const {data} = await home.all();
      //   await fetch('/backend/home/all').then(res=>{
      //       return res.json()
      //   }).then(data=>{
      //       const {category} = data.data;
      //       setCategory(category);
      //       setHasMore(data.length > 0)
      //   })
        const {category} = homeAllData;
        setCategory(category);
        setHasMore(Object.keys(homeAllData).length > 0)
    }

    useEffect(() => {
        loadMore()
    }, [])
    return (
        <div className='adm-tabs'>
            <Tabs tabPosition='left'>
                {
                    category.map((item:any) => {
                        return (
                            <TabPane tab={item['title']} key={item['id']}>
                                <img src={item['img']} alt=""/>
                                <p>{item['title']}</p>
                                <Grid columns={3} gap={8}>
                                {
                                    item['data'].map((item:any,index:number) => {
                                        return (
                                            <Grid.Item key={index}>
                                                    <img src={item['img']} alt=""/>
                                                    <span>{item['name']}</span>
                                                </Grid.Item>

                                        )
                                    })
                                }
                                </Grid>
                            </TabPane>
                        )
                    })
                }
            </Tabs>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
        </div>
    )
}
export default CategoryList;
