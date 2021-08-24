import { Form, Popup, TextArea } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import icon1 from '../../../static/images/1.jpg'
import icon2 from '../../../static/images/3.png'

const ChatList = (props: { Collapsed: any }) => {
    const { Collapsed } = props
    const [chatList, setChatList] = useState([1, 2, 3, 4, 5, 6])
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const hid = document.getElementById('msg_end')
        hid!.scrollIntoView()
    })

    useEffect(() => {
        setIsOpen(false)
        setTimeout(() => {
            setIsOpen(true)
        }, 500)
    }, [Collapsed])

    const addChat = () => {
        setChatList([...chatList, chatList.length + 1])
        const hid = document.getElementById('msg_end')
        hid!.scrollIntoView()
    }

    return (
        <div className="ui middle aligned list chatList">
            {chatList.map((item) => {
                if (item % 2 === 0) {
                    return (
                        <div className="item item-right" key={item}>
                            <div className="right floated content" id="right-chat">
                                <Popup
                                    content="今天天气真好"
                                    open={isOpen}
                                    flowing
                                    style={{ zIndex: 10 }}
                                    className="right-popup"
                                    position="left center"
                                    trigger={<img className="ui avatar image" src={icon1} alt="" />}
                                />
                                <div>Alice</div>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="item item-left" key={item}>
                        <div className="left floated content" id="right-chat">
                            <Popup
                                content="是的啊"
                                open={isOpen}
                                flowing
                                style={{ zIndex: 10 }}
                                className="left-popup"
                                position="right center"
                                trigger={<img className="ui avatar image" src={icon2} alt="" />}
                            />
                            <div>Lena</div>
                        </div>
                    </div>
                )
            })}
            <span id="msg_end" />
            <div className="inputArea" style={Collapsed ? { left: 80 } : { left: 245 }}>
                <Form className="form-area" style={Collapsed ? { width: '80%' } : { width: '68%' }}>
                    <TextArea rows={4} placeholder="Tell us more" />
                </Form>
            </div>
            <div className="chat-utils">
                <div className="ui vertical buttons utils-btn-grop1">
                    <button className="ui circular icon button">
                        <i className="smile icon" />
                    </button>
                    <button className="ui circular icon button">
                        <i className="folder open icon" />
                    </button>
                </div>
                <div className="ui vertical buttons utils-btn-grop2">
                    <button className="ui button utils-btn1" onClick={addChat}>
                        发送
                    </button>
                    <button className="ui button utils-btn2">清除</button>
                </div>
            </div>
        </div>
    )
}

export default ChatList
