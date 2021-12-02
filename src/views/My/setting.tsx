import React,{FC} from "react";
import Header from "../../components/Header";
import {List,Button} from 'antd-mobile';
import './index.scss';
const Setting:FC = () => {
    const settingData = [
        {
            id: '1',
            title: '个人信息',
        },
        {
            id: '2',
            title: '我的实名认证',
        },
        {
            id: '3',
            title: '我的收货地址'
        }
    ]
    return  (
        <div className='setting-wrap'>
            <Header title='设置'/>
            <div className="my-content header-mt">
                <List>
                    {
                        settingData.map((item,index)=>{
                            return (
                               <div key={item.id}>
                                   <List.Item clickable>
                                       {item.title}
                                   </List.Item>
                               </div>
                            )
                        })
                    }
                </List>
                <List style={{'marginTop':'10px'}}>
                    <List.Item
                        extra='v5.0'
                        clickable
                    >
                       关于我们
                    </List.Item>
                </List>
            </div>
            <div className='setting-exit-button'>
                <Button color='primary' fill='outline'>
                    退出当前账号
                </Button>
            </div>
        </div>
    )
}
export default Setting;
