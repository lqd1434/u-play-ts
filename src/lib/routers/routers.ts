import FC from '../../redux/constant'
import Login from '../../views/login/Login'
import Home from '../../components/home/Home'
import Music from '../../views/music/Music'
import ChatWin from '../../views/webSocketChat/chatwin/ChatWin'
import FriendList from '../../views/webSocketChat/chatList/FriendList'
import { routeItem } from '../../types/allInterface'
import Main from '../../components/main/Main'

export const RouterItems: routeItem[] = [
    {
        id: 1,
        path: '/login',
        component: Login,
        needAuth: false,
        title: '登录页面',
        pageState: FC.FORBIDPLAY,
    },
    {
        id: 2,
        path: '/u',
        component: Main,
        title: '根页面',
        pageState: FC.PLAYBACK,
    },
    {
        id: 3,
        path: '/u/index',
        component: Home,
        title: '首页',
        pageState: FC.PLAYBACK,
    },
    {
        id: 4,
        path: '/u/music',
        component: Music,
        needAuth: true,
        title: '音乐列表',
        pageState: FC.PLAYFRONT,
    },
    {
        id: 5,
        path: '/u/fsList',
        component: FriendList,
        needAuth: true,
        title: '聊天列表',
        pageState: FC.PLAYBACK,
    },
    {
        id: 6,
        path: '/u/chatWin',
        component: ChatWin,
        needAuth: true,
        title: '聊天窗口',
        pageState: FC.PLAYBACK,
    },
]
