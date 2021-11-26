import React, {FC, useEffect, useState} from "react";
import Header from "../../components/Header";
import {Tabs, Image} from 'antd-mobile'
import {getImageUrl} from "../../utils";
import home from "../../api/home";
import './index.scss';
const Members: FC = () => {
    const [membersData,setMembersData] = useState([]);
    async function getMembersData(){
        const {data:{data:{membersData}}} = await home.all();
        setMembersData(membersData)
    }
    useEffect(()=>{
        getMembersData()
    },[])
    return (
        <div className='members-wrap'>
            <Header title='铂金会员'/>
            <Tabs className='header-mt' defaultActiveKey='0'>
                {
                    membersData.map((item: any) => {
                        return (
                            <Tabs.Tab title={item.title} key={item.id}>
                                {
                                        item['data'].map((items:any,index:number)=>{
                                            return (
                                                <div className='members-wrap-contain'>
                                                    <Image src={getImageUrl(items.img)}  width={150} height={150} fit='fill' className={item.id === 0?'members-wrap-image':''}/>
                                                    {
                                                        item.id !== 0 && <div>
                                                            <p className='members-wrap-description'>{items.description}</p>
                                                            <div className='members-wrap-price'>
                                                                <p>
                                                                    <span>¥{items.price}</span>
                                                                    <span>¥{items.prePrice}</span>
                                                                </p>
                                                                <span>{items.comments}评论</span>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                }
                            </Tabs.Tab>
                        )
                    })
                }
            </Tabs>
        </div>
    )
}
export default Members
