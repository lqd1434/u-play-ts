import { useEffect } from 'react'
import { RouterItems } from '../routers/routers'
import FC from '../../redux/constant'

export const useSetIsViewState = (props) => {
    const { setForbidPlay, setPlayBack, setPlayFront, location, IsPlay, doPause } = props
    const { pathname } = location
    useEffect(() => {
        const currentRouter = RouterItems.filter((item) => item.path === pathname)
        let pageState = null
        pageState = currentRouter.length === 1 ? currentRouter[0].pageState : FC.PLAYBACK
        switch (pageState) {
            case FC.PLAYFRONT:
                setPlayFront()
                break
            case FC.PLAYBACK:
                setPlayBack()
                break
            case FC.FORBIDPLAY:
                setForbidPlay()
                if (IsPlay) {
                    doPause()
                }
                break
            default:
                setPlayFront()
        }
    }, [IsPlay, doPause, pathname, setForbidPlay, setPlayBack, setPlayFront])
}
