import React, { useEffect, useState } from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './main.css'
import FC from '../../redux/constant'
import Header from '../header/Header'
import SideBar from '../sideBar/SideBar'
import Footer from '../footer/Footer'
import ChatWin from '../../views/webSocketChat/chatwin/ChatWin'
import FriendList from '../../views/webSocketChat/chatList/FriendList'
import Music from '../../views/music/Music'
import Home from '../home/Home'
import Community from '../../views/community/Community'

const classNames = require('classnames')

const Main = (props: any) => {
    const { collapsed, ViewState } = props
    const [footerState, setFooterState] = useState(FC.PLAYFRONT)
    const [footerClass, setFooterClass] = useState('footer-container')
    useEffect(() => {
        switch (ViewState) {
            case FC.FORBIDPLAY: {
                setFooterState(FC.FORBIDPLAY)

                break
            }
            case FC.PLAYFRONT: {
                setFooterState(FC.PLAYFRONT)

                break
            }
            case FC.PLAYBACK: {
                setFooterState(FC.PLAYBACK)

                break
            }
            default: {
                setFooterState(FC.PLAYFRONT)
            }
        }
        const classNameForFooter = classNames(
            'footer-container',
            { playFront: footerState === FC.PLAYFRONT },
            { playBack: footerState === FC.PLAYBACK },
            { playForbid: footerState === FC.FORBIDPLAY },
        )
        setFooterClass(classNameForFooter)
    }, [ViewState, footerClass, footerState])
    return (
        <div>
            <div
                style={collapsed ? { marginLeft: 71 } : { marginLeft: 241 }}
                className="marginLeft_transition"
            >
                <Header />
            </div>
            <>
                <SideBar />
            </>
            <div style={collapsed ? { left: 71 } : { left: 241 }} className={footerClass}>
                <Footer />
            </div>
            <div
                style={collapsed ? { marginLeft: 71 } : { marginLeft: 241 }}
                className="marginLeft_transition router-container"
            >
                <Switch>
                    <Route path="/u/index" component={Home} />
                    <Route path="/u/music" component={Music} />
                    <Route path="/u/fsList" component={FriendList} />
                    <Route path="/u/chatWin" component={ChatWin} />
                    <Route path="/u/community" component={Community} />
                </Switch>
            </div>
        </div>
    )
}

export default connect(
    (state: RootStateOrAny) => ({
        collapsed: state.Collapsed,
        ViewState: state.ViewState,
    }),
    {},
)(Main)
