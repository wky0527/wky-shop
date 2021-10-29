import React,{FC} from "react";
import {chatList} from './data';
const Message:FC= ()=>{
    return (
        <div className='info-message'>
            {
                chatList.map(item=>{
                    return (
                        <dl key={item.id}>
                            <dt>
                                <img src={item.avatar} alt=""/>
                            </dt>
                            <dd>
                                <p>
                                    <span>{item.name}</span>
                                    <time>{item.time}</time>
                                </p>
                                <p>{item.news}</p>
                            </dd>
                        </dl>
                    )
                })
            }
        </div>
    )
}
export default Message
