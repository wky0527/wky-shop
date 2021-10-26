import React,{FC} from "react";
import {SideBar} from 'antd-mobile';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './index.scss';
import {cateList} from "./data";
const Category: FC = () => {
    return (
        <>
            <Header title='商品分类'/>
            <div className='category-main'>
                <SideBar>
                    {
                        cateList.map((item,index)=>{
                           return (
                               <SideBar.Item title={item.title} key={item.id}>
                                   {item.id}
                               </SideBar.Item>

                           )
                        })
                    }
                </SideBar>
            </div>
            <Footer/>
        </>
    )
}
export default Category;
