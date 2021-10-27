import React, {FC, useState} from "react";
import {Tabs} from 'antd-mobile';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './index.scss';
import {navList} from "./data";
import List from './list';

const Category: FC<any> = () => {
    return (
        <>
            <Header title='商品分类'/>
            <div className='category-main'>
                <Tabs>
                    {
                        navList.map((item,index)=>{
                           return (
                               <Tabs.TabPane title={item.name} key={item.id}>
                                   <List id={item.id}/>
                               </Tabs.TabPane>
                           )
                        })
                    }
                </Tabs>
            </div>
            <Footer/>
        </>
    )
}
export default Category;
