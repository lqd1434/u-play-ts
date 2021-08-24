import React from 'react'
import './home.css'
import { connect, RootStateOrAny } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { MovieDisplay, MusicDisplay } from './HomeUtils'
import IndexSwiper from './IndexSwiper'

const classNames = require('classnames')

const Home = (props: any) => {
    const { Collapsed } = props
    // const LazyComponent = React.lazy(() => new Promise((resolve) => {
    // 	setTimeout(() => {
    // 		resolve({
    // 			default: () => <IndexSwiper collapsed={collapsed} />,
    // 		});
    // 	}, 3000);
    // 	}));
    const classNameForBtn = classNames('ui button', { btn: !Collapsed }, { 'btn-coll': Collapsed })
    return (
        <div className="u-home">
            <div className="index-top">
                <IndexSwiper />
                <div className="index-news">
                    <div className="ui segment">
                        <div className="ui relaxed divided list">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div className="item" key={item}>
                                    <div className="content">
                                        <div className="header">Snickerdoodle</div>
                                        An excellent companion
                                    </div>
                                </div>
                            ))}
                            <div className="item">
                                <div className="ui label">
                                    <i className="mail icon" /> 最新消息
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-middle">
                <div className="ui segment index-btn-group">
                    <button className={classNameForBtn}>U-音乐</button>
                    <button className={classNameForBtn}>U-社区</button>
                    <button className={classNameForBtn}>U-影视</button>
                    <button className={classNameForBtn}>U-反馈</button>
                </div>
            </div>
            <div className="index-musicInfo">
                <MusicDisplay />
            </div>
            <div className="index-movieInfo">
                <h1 className="ui header center aligned">最新影视</h1>
                <MovieDisplay />
            </div>
        </div>
    )
}

export default connect(
    (state: RootStateOrAny) => ({
        Collapsed: state.Collapsed,
    }),
    {},
)(withRouter(Home))
