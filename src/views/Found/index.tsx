import React,{FC} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListCollapse from '../../components/ListCollapse';
import Message from "./message";
import {Search,WaterMark,Tabs} from "antd-mobile";
import './index.scss';
const textProps = {
    content: 'Wang Ke Yu'
}
const Found: FC = () => {
    return (
        <>
            <Header title='消息'/>
            <Search
                className='header-mt'
                placeholder='请输入内容'
                showCancelButton
                style={{
                    '--border-radius': '100px',
                    '--background': 'rgba(255, 255, 255, 0.1)',
                }}
            />
            <Tabs>
                <Tabs.TabPane title='联系人' key='contact'>
                    <ListCollapse />
                </Tabs.TabPane>
                <Tabs.TabPane title='消息' key='message'>
                    <Message />
                </Tabs.TabPane>
            </Tabs>
            <WaterMark {...textProps} />
            <Footer/>
        </>
    )
}
export default Found;
