import React, {FC} from "react";
import {cateList} from "./data";

interface ListProps {
    id: Number
}

const List: FC<ListProps> = (props: ListProps) => {
    const {id} = props;
    return (
        <>
            {cateList.map((item, index) => {
                return (
                    <div key={index}>
                        {
                            id === item.id &&
                            item.list.map((item, index) => {
                                return (
                                    <div className='category-list module-mb' key={index}>
                                        <div className="title">
                                            <span className='left-line'></span>
                                            <span className='center-title'>{item.title}</span>
                                            <span className='right-line'></span>
                                        </div>
                                        <div className="content" key={index}>
                                            {
                                                item.list.map((item, index) => {
                                                    return (
                                                        <dl key={index}>
                                                            <dt><img src={item.img} alt=""/></dt>
                                                            <dd>
                                                                <p>{item.subTitle}</p>
                                                                <p>
                                                                    <span>¥{item.price}</span>
                                                                    <span>¥{item.oldPrice}</span>
                                                                </p>
                                                            </dd>
                                                        </dl>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
            }
        </>
    )
}
export default List;
