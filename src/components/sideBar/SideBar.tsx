import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './sideBar.css'
import { SideBarMenu } from './sideBarUtils'
import Icon1 from '../../static/images/1.jpg'
import { sideBarItems } from './sideBarItems'

const SideBar = () => {
    const Collapsed = useSelector((state: RootStateOrAny) => state.Collapsed)
    const history = useHistory()
    const toThisPage = (router: { path: any }) => {
        history.push(router.path)
    }
    return (
        <div className="u-sideBar" style={Collapsed ? { width: 70 } : { width: 240 }}>
            <div
                className="u-title-icon animate__animated animate__fadeInDown"
                style={Collapsed ? { display: 'none' } : { display: 'block' }}
            >
                <div className="u-img-t">
                    <div className="ui rotate left reveal image">
                        <img src={Icon1} alt="" className="visible content sideBar-logo-img" />
                        <div className="hidden content sideBar-logo-text">李清栋</div>
                    </div>
                </div>
            </div>
            <div>
                <SideBarMenu
                    collapsed={Collapsed}
                    menuItems={sideBarItems}
                    toThisPage={toThisPage}
                />
            </div>
        </div>
    )
}
export default SideBar
