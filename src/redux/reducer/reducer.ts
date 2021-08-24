import FC from '../constant'

const preStateCollapsed = false
export function Collapsed(preState = preStateCollapsed, action: { type: any }) {
    const { type } = action
    switch (type) {
        case FC.COLLAPSED:
            return true
        case FC.UNCOLLAPSED:
            return false
        default:
            return preState
    }
}

const preStateIsShowFooter = FC.PLAYFRONT
export function ViewState(preState = preStateIsShowFooter, action: { type: any }) {
    const { type } = action
    switch (type) {
        case FC.PLAYFRONT:
            return FC.PLAYFRONT
        case FC.PLAYBACK:
            return FC.PLAYBACK
        case FC.FORBIDPLAY:
            return FC.FORBIDPLAY
        default:
            return preState
    }
}

const preStateIsPlay = false
export function IsPlay(preState = preStateIsPlay, action: { type: any }) {
    const { type } = action
    switch (type) {
        case FC.Play:
            return true
        case FC.PAUSE:
            return false
        default:
            return preState
    }
}
const preStateCurrentMusic = {}
export function CurrentMusic(preState = preStateCurrentMusic, action: { type: any; data: any }) {
    const { type, data } = action
    switch (type) {
        case FC.SETCURRENTMUSIC:
            return data
        default:
            return preState
    }
}

const preStateMusics: any[] = []
export function Musics(preState = preStateMusics, action: { type: any; data: any }) {
    const { type, data } = action
    switch (type) {
        case FC.SETMUSICS:
            return data
        default:
            return preState
    }
}
