import React, {FC, useState} from "react";
import {RightOutline} from 'antd-mobile-icons'
import './index.scss';
import {list} from './data';
const ListCollapse: FC = () => {
    const [showList,useShowList] = useState(false);
    const [curList,useCurList] = useState(1);
    const showSwitch = (id:any) => {
        useShowList(true)
        useCurList(id)
    }
    return (
        <div className='list-collapse'>
            {
                list.map((item,index)=>{
                   return (
                       <ul key={index}>
                           <div className='left-title' onClick={()=> showSwitch(item.id)}>
                               <RightOutline/>
                               <h2>{item.title}</h2>
                           </div>
                           {curList === item.id && <li key={item.id}>
                               {
                                   item.children.map((item, index) => {
                                       return (
                                           <dl key={index}>
                                               <dt>
                                                   <img src={item.img} alt=""/>
                                               </dt>
                                               <dd>
                                                   <span>{item.name}</span>
                                                   <p>{item.content}</p>
                                               </dd>
                                           </dl>

                                       )
                                   })
                               }
                           </li>
                           }
                       </ul>
                   )
                })
            }
        </div>
    )
}
export default ListCollapse
