import React,{FC} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryList from "./category";
import {Search} from "antd-mobile";
import './index.scss';
const Category: FC = () => {
    const header =  <Search placeholder='请输入内容' showCancelButton style={{'--border-radius': '100px'}}/>
    return (
        <>
            <Header title={header}/>
            <CategoryList/>
            <Footer/>
        </>
    )
}
export default Category;
