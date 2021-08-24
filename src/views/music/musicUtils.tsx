import React, { useState, useEffect } from 'react'
import { Transition } from 'semantic-ui-react'
import img1 from '../../static/images/back1.jpg'

interface Props {
    musicList: any
    playMusic: any
    updateLoveMusic: any
    setMusicList: any
    CurrentMusic: any
}

export const MusicTable = (props: Props) => {
    const { musicList, playMusic, updateLoveMusic, setMusicList, CurrentMusic } = props
    const [musics, setMusics] = useState<any>([])
    useEffect(() => {
        setMusics([...musicList])
    }, [musicList])
    const setIsShow = (data: { arr: any; index: any; isShow: any }) => {
        const { arr, isShow, index } = data
        arr[index].isShow = isShow
        setMusics([...arr])
    }
    const handleChangeLove = (index: string | number) => {
        const arr = musics
        if (arr[index].isLove) {
            arr[index].isLove = false
            updateLoveMusic({ choice: 'reduce', musicId: musics[index].id })
        } else {
            arr[index].isLove = true
            updateLoveMusic({ choice: 'add', musicId: musics[index].id })
        }
        setMusicList([...arr])
        setMusics([...arr])
    }
    return (
        <table className="ui single line table">
            <thead>
                <tr>
                    <th style={{ width: '35%' }}>歌名</th>
                    <th style={{ width: '15%' }} />
                    <th style={{ width: '25%' }}>歌手</th>
                    <th className="right aligned" style={{ paddingRight: 32 }}>
                        时长
                    </th>
                </tr>
            </thead>
            <tbody>
                {musics.map((item: any, index: number, arr: any[]) => (
                    <tr
                        onMouseEnter={() => {
                            setIsShow({ arr, index, isShow: true })
                        }}
                        onMouseLeave={() => {
                            setIsShow({ arr, index, isShow: false })
                        }}
                        onDoubleClick={() => playMusic(item)}
                        key={item.id}
                        className="music-tr"
                    >
                        <td>
                            <div
                                className="ui ribbon label music-active"
                                style={
                                    item.musicName === CurrentMusic.musicName
                                        ? { display: 'inline-block' }
                                        : { display: 'none' }
                                }
                            >
                                <i className="music icon" /> {item.musicName}
                            </div>
                            {/*	正常 */}
                            <span
                                style={
                                    item.musicName === CurrentMusic.musicName
                                        ? { display: 'none' }
                                        : { display: 'inline' }
                                }
                            >
                                {item.musicName}
                            </span>
                        </td>
                        <td style={{ fontSize: 18 }}>
                            <div
                                style={
                                    item.isShow
                                        ? { visibility: 'visible' }
                                        : { visibility: 'hidden' }
                                }
                            >
                                <i
                                    className="play circle outline icon op-icon-music"
                                    onClick={() => {
                                        playMusic(item)
                                    }}
                                />
                                <i
                                    className={`op-icon-music icon ${
                                        item.isLove ? 'heart' : 'heartbeat'
                                    }`}
                                    style={
                                        item.isLove
                                            ? { paddingLeft: 20, color: 'red' }
                                            : { paddingLeft: 20 }
                                    }
                                    onClick={() => {
                                        handleChangeLove(index)
                                    }}
                                />
                            </div>
                        </td>
                        <td>{item.singer}</td>
                        <td className="right aligned" style={{ paddingRight: 26 }}>
                            {item.longtime}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export const Description = () => (
    <Transition.Group animation="fade right" duration={500}>
        <div className="ui divided items">
            <div className="item">
                <div className="image">
                    <img src={img1} alt="" className="des-img" />
                </div>
                <div className="content">
                    <p className="header">音乐列表</p>
                    <div className="meta">
                        <span className="cinema">
                            每个人都有一个难以忘记的她或者他，
                            不知是因为有缘无分，还是因为相遇太早，总是那样的无可奈何，
                            却又那么折磨人，最后只能感叹遇到真好，彼此安好！
                        </span>
                    </div>
                    <div className="description">
                        <p>我这一次终究还是来得太迟......</p>
                    </div>
                    <div className="extra">
                        <div className="ui label">100首</div>
                        <div className="ui label">
                            <i className="heart icon" />
                            触及真心
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition.Group>
)
