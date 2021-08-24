import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect, RootStateOrAny } from 'react-redux'
import { RouterItems } from './lib/routers/routers'
import { routeItem } from './types/allInterface'
import { useSetIsViewState } from './lib/hooks/useSetIsShowFooter'
import { doPause, doPlay, setForbidPlay, setPlayBack, setPlayFront } from './redux/actions/action'

const GlobalRouter = (props: any) => {
    console.log('test1')
    useSetIsViewState(props)
    const renderPage = (item: routeItem, props: any) => {
        const isLogin = localStorage.getItem('isLogin')
        if (item.needAuth === undefined) {
            item.needAuth = true
        }
        if (!item.needAuth) return <item.component {...props} />
        if (isLogin === 'true') return <item.component {...props} RouterItems={RouterItems} />
        console.log('test2')
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location },
                }}
            />
        )
    }

    return (
        <>
            <Switch>
                {RouterItems.map((item) => (
                    <Route
                        key={item.id}
                        exact
                        path={item.path}
                        render={(props) => renderPage(item, props)}
                    />
                ))}
            </Switch>
        </>
    )
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
)(withRouter(GlobalRouter))
