import React, { useEffect, useRef, useState } from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import './footer.css'
import { Popup } from 'semantic-ui-react'
import { doPause, doPlay, setCurrentMusic } from '../../redux/actions/action'

const classNames = require('classnames')

const Footer = (props: {
    IsPlay: any
    doPlay: any
    doPause: any
    Collapsed: any
    CurrentMusic: any
    setCurrentMusic: any
    Musics: any
}) => {
    const { IsPlay, doPlay, doPause, Collapsed, CurrentMusic, setCurrentMusic, Musics } = props

    const rangeRef = useRef<HTMLInputElement>(null)
    const musicRef = useRef<HTMLAudioElement>(null)
    const volumeRef = useRef<HTMLInputElement>(null)

    const [proValue, setProValue] = useState<any>(0)
    const [isPress, setIsPress] = useState<any>(false)
    const [musicDuration, setMusicDuration] = useState<any>(0)
    const [durationTime, setDurationTime] = useState<any>('00:00')
    const [volume, setVolume] = useState<any>(100)
    const [playIngMusicName, setPlayIngMusicName] = useState<any>('u-play 听你想听')

    useEffect(() => {
        if (CurrentMusic.musicName) {
            setPlayIngMusicName(CurrentMusic.musicName)
        }
    }, [CurrentMusic])

    useEffect(() => {
        const musicElement = document.getElementById('musicPlayer') as HTMLAudioElement
        if (IsPlay) {
            musicElement.play()
        } else {
            musicElement.pause()
        }
    }, [CurrentMusic, IsPlay])

    const getDurationFormat = (musicDuration1: number) => {
        let minutes: any = Math.floor(musicDuration1 / 60)
        let seconds: any = Math.floor(musicDuration1 % 60)
        if (!Number.isNaN(minutes) && !Number.isNaN(seconds)) {
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            if (seconds < 10) {
                seconds = `0${minutes}`
            }
            return `${minutes}:${seconds}`
        }
        return '00:00'
    }
    const changeRange = () => {
        if (!isPress) {
            setProValue(musicRef.current?.currentTime)
            setVolume((musicRef.current?.volume as number) * 100)
            setMusicDuration(musicRef.current?.duration)
            const date1 = getDurationFormat(musicDuration)
            setDurationTime(date1)
        }
        const element = document.getElementsByClassName('music-progressBar')[0] as HTMLElement
        element.style.background =
            `linear-gradient(to right,black ${(proValue / musicDuration) * 100}%,white` +
            ',white,white,white,white,white,white,white,white,white,white,white,white,white,white,white,white)'
    }
    const switchPlayState = () => {
        console.log(CurrentMusic)
        if (!CurrentMusic.id) {
            setCurrentMusic(Musics[0])
            setTimeout(() => {
                doPlay()
            }, 500)
        } else if (IsPlay) {
            doPause()
        } else {
            doPlay()
        }
    }
    const setProgress = () => {
        setProValue(rangeRef.current?.value)
    }
    const onMouseDownCapture = () => {
        setProValue(rangeRef.current?.value)
        setIsPress(true)
    }
    const onMouseUpCapture = () => {
        setIsPress(false)
        musicRef.current!.currentTime = proValue
    }
    const onMouseDownCaptureV = () => {
        setIsPress(true)
        setVolume(volumeRef.current?.value)
    }
    const onMouseUpCaptureV = () => {
        setIsPress(false)
        musicRef.current!.volume = volume / 100
    }
    const classNameForIcon = classNames('circle notch', 'icon-loading', 'icon', { loading: IsPlay })
    const changeVolume = () => {
        setVolume(volumeRef.current?.value)
    }
    const NextMusic = () => {
        let nextMusicIndex = 0
        for (const [index, item] of Musics.entries()) {
            if (item.musicName === CurrentMusic.musicName) {
                nextMusicIndex = index !== Musics.length - 1 ? index + 1 : 0
            }
        }
        setCurrentMusic(Musics[nextMusicIndex])
    }
    const PreviousMusic = () => {
        let previousMusicIndex = 0
        for (const [index, item] of Musics.entries()) {
            if (item.musicName === CurrentMusic.musicName) {
                previousMusicIndex = index !== 0 ? index - 1 : Musics.length - 1
            }
        }
        console.log(Musics[previousMusicIndex])
        setCurrentMusic(Musics[previousMusicIndex])
    }

    const musicEnded = () => {
        NextMusic()
    }

    const volumeChangeBar = () => (
        <div className="volumeContainer">
            <span className="volumeNumber">{Math.floor(volume)}</span>
            <input
                type="range"
                max={100}
                value={volume}
                className="volumeChange"
                ref={volumeRef}
                onChange={changeVolume}
                onMouseDownCapture={onMouseDownCaptureV}
                onMouseUpCapture={onMouseUpCaptureV}
            />
        </div>
    )
    return (
        <div className="u-footer">
            <audio
                src={`/static/musics/${CurrentMusic.musicName} - ${CurrentMusic.singer}.mp3`}
                id="musicPlayer"
                ref={musicRef}
                onTimeUpdate={changeRange}
                onEnded={musicEnded}
            />
            <div className="op-play-group">
                <i
                    className="backward icon op-icon"
                    style={{ paddingRight: 18 }}
                    onClick={PreviousMusic}
                />
                <i
                    className={IsPlay ? 'pause circle icon op-icon' : 'play circle icon op-icon'}
                    onClick={() => {
                        switchPlayState()
                    }}
                    style={{ paddingLeft: 5, fontSize: 32 }}
                />
                <i
                    className="forward icon op-icon"
                    style={{ paddingLeft: 10 }}
                    onClick={NextMusic}
                />
            </div>
            <i className={classNameForIcon} />
            <i className="icon smile outline music-logo" />
            <div className="musicPlay-info" style={Collapsed ? { width: 700 } : { width: 530 }}>
                <div className="musicName">
                    <div>{playIngMusicName}</div>
                    <div className="musicTime">{durationTime}</div>
                </div>
                <input
                    type="range"
                    className="music-progressBar"
                    max={Number.isNaN(musicDuration) ? 100 : musicDuration}
                    ref={rangeRef}
                    value={proValue}
                    onChange={() => setProgress()}
                    onMouseDownCapture={onMouseDownCapture}
                    onMouseUpCapture={onMouseUpCapture}
                />
            </div>
            <div className="icon-setting-group" style={Collapsed ? { right: 180 } : { right: 360 }}>
                <Popup
                    content={volumeChangeBar}
                    hoverable
                    position="top center"
                    trigger={
                        <i className="volume up icon icon-setting" style={{ marginLeft: 20 }} />
                    }
                />
                <i
                    className={`icon-setting icon ${CurrentMusic.isLove ? 'heart' : 'heartbeat'}`}
                    style={
                        CurrentMusic.isLove ? { marginLeft: 10, color: 'red' } : { marginLeft: 10 }
                    }
                />
                <i className="random icon icon-setting" style={{ marginLeft: 10 }} />
            </div>
        </div>
    )
}
export default connect(
    (state: RootStateOrAny) => ({
        IsPlay: state.IsPlay,
        Collapsed: state.Collapsed,
        CurrentMusic: state.CurrentMusic,
        Musics: state.Musics,
    }),
    {
        doPlay,
        doPause,
        setCurrentMusic,
    },
)(Footer)
