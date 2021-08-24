import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { connect, RootStateOrAny } from 'react-redux'
import {
    doPause,
    doPlay,
    setForbidPlay,
    setPlayBack,
    setPlayFront,
} from '../../redux/actions/action'
import { useSetIsViewState } from '../hooks/useSetIsShowFooter'
import Login from '../../views/login/Login'
import Main from '../../components/main/Main'

const FrontendAuth = (props: any) => {
    const { location } = props
    const history = useHistory<History>()
    const { pathname } = location
    const isLogin = localStorage.getItem('isLogin')
    useSetIsViewState(props)
    if (pathname === '/u'||pathname === '/') {
        history.push('/u/index')
    }
    if (isLogin) {
        // 如果是登陆状态，想要跳转到登陆，重定向到主页
        if (pathname === '/login') {
            return <Main />
        }
        return <Main />
    }
    // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
    return <Login fromPath={pathname} />
}

export default connect(
    (state: RootStateOrAny) => ({
        IsPlay: state.IsPlay,
        ViewState: state.ViewState,
    }),
    {
        doPlay,
        doPause,
        setPlayFront,
        setPlayBack,
        setForbidPlay,
    },
)(withRouter(FrontendAuth))
