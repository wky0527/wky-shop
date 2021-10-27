import React, {FC, useState} from "react";
import {RightOutline} from 'antd-mobile-icons'
import './index.scss';
import {} from './data';
const ListCollapse: FC = () => {
    const [showList,useShowList] = useState(false);
    return (
        <div className='list-collapse'>
            <ul>
                <div className='left-title'>
                    <RightOutline/>
                    <h2>我的好友</h2>
                </div>
                <li>
                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>冬旭</span>
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>薇薇</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>雪芹</span>
                        </dd>
                    </dl>

                </li>
            </ul>
            <ul>
                <div className='left-title'>
                    <RightOutline/>
                    <h2>❤️</h2>
                </div>
                <li>
                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>汤汤</span>
                        </dd>
                    </dl>
                </li>
            </ul>
            <ul>
                <div className='left-title'>
                    <RightOutline/>
                    <h2>黑名单</h2>
                </div>
                <li>
                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>张三</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <img src="https://img0.baidu.com/it/u=199023397,1701150760&fm=26&fmt=auto" alt=""/>
                        </dt>
                        <dd>
                            <span>李四</span>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    )
}
export default ListCollapse
