import { createStore, combineReducers } from 'redux'
import { Collapsed, IsPlay, CurrentMusic, Musics, ViewState } from './reducer/reducer'

const allReducer = combineReducers({
    Collapsed,
    IsPlay,
    Musics,
    CurrentMusic,
    ViewState,
})
export default createStore(allReducer)
