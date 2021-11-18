import React,{FC} from "react";
import Header from "../../components/Header";
import {SearchOutline} from "antd-mobile-icons";
import {Tabs} from "antd-mobile";
import {flashSaleData} from '../../../mock/home/index';
const flashSale:FC = () => {
    const icon = <SearchOutline />
    return (
        <div className='flash-sale-wrap'>
            <Header title='限时抢购' rightTitle={icon}/>
           <Tabs>
               {
                   flashSaleData.map(item=>{
                        return (
                            <Tabs className="TabPane">
                                {item}
                            </Tabs>
                        )
                   })
               }
           </Tabs>
        </div>
    )
}
export default flashSale
