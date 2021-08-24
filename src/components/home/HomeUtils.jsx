import React from 'react'
import img1 from '../../static/images/2.jpg'

export const MusicDisplay = () => (
    <div className="ui placeholder black segment" style={{ marginLeft: 30, marginRight: 30 }}>
        <div className="ui two column aligned grid">
            <div className="ui vertical divider">
                <i className="play circle icon" />
            </div>
            <div className="row">
                <div className="column column-left">
                    <div>
                        <h3 className="ui header musicDisplay-header">昨日最受欢迎歌曲</h3>
                        <div className="ui relaxed list">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div className="item" key={item}>
                                    <i className="large headphones middle aligned icon" />
                                    <div className="content">
                                        <span className="header">Semantic-Org/Semantic-UI</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="column column-right">
                    <div>
                        <h3 className="ui header musicDisplay-header">最新上线</h3>
                        <div className="ui relaxed list">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div className="item" key={item}>
                                    <i className="large music middle aligned icon" />
                                    <div className="content">
                                        <span className="header">Semantic-Org/Semantic-UI</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const MovieDisplay = () =>{

    const handleIpc = () =>{
            window.ipcRenderer.on('pong', (event, arg) => {
                console.log('00',arg)
            })
            window.ipcRenderer.send('ping','hhhh')
    }
    return (
        <div className="ui five stackable cards">
            {[1, 2, 3, 4, 5].map((item) => (
                <div className="card" key={item}>
                    <div className="image">
                        <img src={img1} alt="" className="movie-cover" />
                    </div>
                    <div className="extra content" onClick={handleIpc}>
                        <div>
                            <span className="header left">明天会更好</span>
                            <small className="right floated">更新与2分钟前</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
