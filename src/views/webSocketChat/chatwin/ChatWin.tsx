import React from 'react'
import './chatWin.css'
import { RootStateOrAny, useSelector } from 'react-redux'
import ChatList from './chatUtils'

const ChatWin = () => {
    const Collapsed = useSelector((state: RootStateOrAny) => state.Collapsed)
    return (
        <div className="u-chatWin">
            <div>
                <div className="win-header">
                    <i className="icon arrow circle left win-header-back header-i" />
                    <i className="icon users win-header-users header-i" />
                    <span className="win-header-title">迪丽热巴</span>
                    <i className="user circle outline icon win-header-user header-i" />
                    <i className="paint brush icon win-header-quidditch header-i" />
                </div>
                <div className="chat-container">
                    <ChatList Collapsed={Collapsed} />
                </div>
            </div>
        </div>
    )
}
export default ChatWin
