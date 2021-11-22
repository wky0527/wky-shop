import React,{FC} from 'react';
import './index.scss';
const scriptElem = document.createElement('script');
// 在上方复制的链接放在这里
scriptElem.src = '//at.alicdn.com/t/font_2922939_obgldqj2z6q.js';
document.body.appendChild(scriptElem);
interface Props  {
    type: string
}
const Icon = ({type}: Props) => {
    return (
        <svg aria-hidden="true" className='adm-icon'>
            <use xlinkHref={`#${type}`} />
        </svg>
    )
}
export default Icon;

