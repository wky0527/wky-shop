import React, {FC, useState} from "react";
import {Tabs} from 'antd-mobile';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './index.scss';
import {navList} from "./data";
import List from './list';

const Found: FC = () => {
    return (
        <>
            <Header title='新品上市'/>
            <div className='category-main'>
                <Tabs>
                    {
                        navList.map((item,index)=>{
                           return (
                               <Tabs.Tab title={item.name} key={item.id}>
                                   <List id={item.id}/>
                               </Tabs.Tab>
                           )
                        })
                    }
                </Tabs>
            </div>
            <Footer/>
        </>
    )
}
export default Found;
