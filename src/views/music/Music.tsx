import React, { useEffect, useState } from 'react'
import './music.css'
import { connect, RootStateOrAny } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { Description, MusicTable } from './musicUtils'
import { doAuthGetAxios } from '../../axiosRequest/doGetRequest'
import {
    doPause,
    doPlay,
    setCurrentMusic,
    setForbidPlay,
    setMusicList,
    setPlayBack,
    setPlayFront,
} from '../../redux/actions/action'

const Music = (props: {
    doPlay: any
    musicList: any
    setMusicList: any
    setCurrentMusic: any
    CurrentMusic: any
}) => {
    const { doPlay, musicList, setMusicList, setCurrentMusic, CurrentMusic } = props
    const [isShowMessage, setIsShowMessage] = useState(false)
    const setToLove = (musicList: any, loveMusicList: string | any[]) => {
        if (musicList.length > 0 && loveMusicList.length > 0 && loveMusicList[0] !== null) {
            for (const element of musicList) {
                for (const element_ of loveMusicList) {
                    if (element.musicName === element_.musicName) {
                        element.isLove = true
                    }
                }
            }
            return musicList
        }
        return musicList
    }
    useEffect(() => {
        if (musicList.length === 0) {
            doAuthGetAxios('/api/music/all', localStorage.getItem('myToken') as string).then(
                (result) => {
                    doAuthGetAxios(
                        '/api/loveMusic/all',
                        localStorage.getItem('myToken') as string,
                    ).then((res: any) => {
                        const newList = setToLove(result, res.responseBody)
                        if (newList.length > 0) {
                            setMusicList([...newList])
                        }
                    })
                },
            )
        }
    }, [musicList.length, setMusicList])

    const newList = musicList.map((item: any) => ({ ...item, isShow: false }))

    const playMusic = (music: any) => {
        setCurrentMusic(music)
        doPlay()
    }
    const updateLoveMusic = async (data: { choice: any; musicId: any }) => {
        const { choice, musicId } = data
        setIsShowMessage(false)
        const result = await doAuthGetAxios(
            `/api/loveMusic/${choice}/${musicId}`,
            localStorage.getItem('myToken') as string,
        )
        setIsShowMessage(true)
        setTimeout(() => {
            setIsShowMessage(false)
        }, 3000)
        console.log(result)
    }
    return (
        <div className="u-music">
            <div
                className="message-container"
                style={isShowMessage ? { visibility: 'visible' } : { visibility: 'hidden' }}
            >
                <Message>
                    <Message.Content>
                        <Message.Header>
                            <i
                                className="check icon"
                                style={{ color: 'green', fontSize: 20, paddingRight: 20 }}
                            />
                            添加成功
                        </Message.Header>
                    </Message.Content>
                </Message>
            </div>
            <Description />
            <MusicTable
                setMusicList={setMusicList}
                CurrentMusic={CurrentMusic}
                musicList={newList}
                playMusic={playMusic}
                updateLoveMusic={updateLoveMusic}
            />
        </div>
    )
}
export default connect(
    (state: RootStateOrAny) => ({
        IsPlay: state.IsPlay,
        CurrentMusic: state.CurrentMusic,
        musicList: state.Musics,
        ViewState: state.ViewState,
    }),
    {
        doPlay,
        doPause,
        setMusicList,
        setCurrentMusic,
        setPlayFront,
        setPlayBack,
        setForbidPlay,
    },
)(Music)
