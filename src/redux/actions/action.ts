import FC from '../constant'
// 侧边栏折叠
export const changeToCollapsed = () => ({ type: FC.COLLAPSED, data: '' })
export const changeToUnCollapsed = () => ({ type: FC.UNCOLLAPSED, data: '' })
// 页面状态
export const setPlayFront = () => ({ type: FC.PLAYFRONT, data: '' })
export const setPlayBack = () => ({ type: FC.PLAYBACK, data: '' })
export const setForbidPlay = () => ({ type: FC.FORBIDPLAY, data: '' })
// 播放音乐
export const doPlay = () => ({ type: FC.Play, data: '' })
export const doPause = () => ({ type: FC.PAUSE, data: '' })
// 正在播放的音乐
export const setCurrentMusic = (music: any) => ({ type: FC.SETCURRENTMUSIC, data: music })
// 从服务器获取的音乐列表
export const setMusicList = (musics: any) => ({ type: FC.SETMUSICS, data: musics })
