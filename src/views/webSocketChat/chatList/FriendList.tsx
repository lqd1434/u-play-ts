import React from 'react'
import './friendList.css'
import img1 from '../../../static/images/1.jpg'

const FriendList = () => {
    return (
        <div className="u-friendList">
            <h1 className="friendList-title">聊天列表</h1>
            <div className="ui items friendList-items">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div className="item friendList-item" key={item}>
                        <span className="ui tiny image">
                            <img src={img1} alt="" className="friendList-item-img" />
                        </span>
                        <div className="content friend-item-content">
                            <span className="header">史蒂夫.费利西亚诺</span>
                            <div className="description">
                                <p>
                                    史蒂夫是一个
                                    <span>图书馆学家</span>{' '}
                                    住在纽约市。她喜欢把她的时间花在阅读、跑步和写作上.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FriendList
