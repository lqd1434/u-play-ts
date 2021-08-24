import Login from '../../views/login/Login'
import Music from '../../views/music/Music'
import FC from '../../redux/constant'
import ChatWin from '../../views/webSocketChat/chatwin/ChatWin'
import FriendList from '../../views/webSocketChat/chatList/FriendList'
import Main from '../../components/main/Main'
import Home from '../../components/home/Home'

export const routes = [
    {
        id: 'no',
        path: '/u',
        name: 'main',
        component: Main,
        title: '',
        pageState: FC.FORBIDPLAY,
    },
    {
        id: 'no',
        path: '/login',
        name: 'login',
        component: Login,
        title: '登录页面',
        pageState: FC.FORBIDPLAY,
    },
    {
        id: '1',
        path: '/u/index',
        name: 'index',
        component: Home,
        title: '首页',
        pageState: FC.PLAYBACK,
    },
    {
        id: '2',
        path: '/u/music',
        name: 'music',
        component: Music,
        title: '音乐列表',
        pageState: FC.PLAYFRONT,
    },
    {
        id: '3',
        path: '/u/fsList',
        name: 'fsList',
        component: FriendList,
        title: '聊天列表',
        pageState: FC.PLAYBACK,
    },
    {
        id: '4',
        path: '/u/chatWin',
        name: 'chatWin',
        component: ChatWin,
        title: '聊天窗口',
        pageState: FC.PLAYBACK,
    },
    {
        id: '5',
        path: '/u/community',
        name: 'community',
        component: ChatWin,
        title: '快乐社区',
        pageState: FC.PLAYBACK,
    },
]
