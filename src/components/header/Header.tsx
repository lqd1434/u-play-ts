import React from 'react'
import './header.css'
import { useHistory } from 'react-router-dom'
import { connect, RootStateOrAny } from 'react-redux'
import { Popup } from 'semantic-ui-react'
import icon from '../../static/images/1.jpg'
import { doLogoutAuth } from '../../axiosRequest/doGetRequest'
import { changeToCollapsed, changeToUnCollapsed, doPause } from '../../redux/actions/action'

const Header = (props: any) => {
    const history = useHistory()
    const doLogout = () => {
        const { doPause } = props
        doPause()
        doLogoutAuth(localStorage.getItem('myToken') as string).then((res: any) => {
            if (res.stateCode === 200) {
                localStorage.removeItem('myToken')
                localStorage.removeItem('isLogin')
                console.log('注销成功')
                history.push({ pathname: '/login' })
            } else {
                console.log('注销失败,登录失效,请尝试关闭页面')
            }
        })
    }

    const changeCollapsed = () => {
        const { Collapsed, changeToUnCollapsed, changeToCollapsed } = props
        if (Collapsed) {
            changeToUnCollapsed()
        } else {
            changeToCollapsed()
        }
    }
    const content = (
        <div className="popContent">
            <div className="userName-inner">李清栋</div>
            <img src={icon} className="img-inner" alt="1.png" />
            <div className="userRole-inner">SVIP</div>
            <div className="ui divider" />
            <button className="logout-btn" onClick={doLogout}>
                退出登录
            </button>
        </div>
    )

    const { collapsed } = props
    return (
        <div className="ui attached top u-header">
            <Popup
                content={content}
                hoverable
                position="top center"
                trigger={<img src={icon} className="img-outer" alt="" />}
            />
            <i
                className={`icon collapsed-icon ${collapsed ? 'outdent' : 'indent'}`}
                onClick={changeCollapsed}
            />
        </div>
    )
}

export default connect(
    (state: RootStateOrAny) => ({
        Collapsed: state.Collapsed,
    }),
    {
        changeToCollapsed,
        changeToUnCollapsed,
        doPause,
    },
)(Header)
