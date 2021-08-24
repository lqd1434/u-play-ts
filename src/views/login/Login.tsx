import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import Icon1 from '../../static/images/1.jpg'

const Login = (props: any) => {
    const { fromPath } = props
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const history = useHistory()

    const login: any = (): void => {
        const usernameValue = username.current?.value
        const passwordValue = password.current?.value
        console.log(usernameValue)
        // if (usernameValue && passwordValue) {
        //     console.log()
        //     axios({
        //         url: '/api/admin/doLogin',
        //         method: 'post',
        //         data: {
        //             username: usernameValue.trim(),
        //             password: passwordValue.trim(),
        //         },
        //     }).then((res) => {
        //         console.log(res.data)
        //         if (res.data.stateCode === 200) {
        //             localStorage.setItem(
        //                 res.data.responseBody.tokenName,
        //                 res.data.responseBody.tokenValue,
        //             )
                    localStorage.setItem('isLogin', 'true')
                    username.current!.value = ''
                    password.current!.value = ''
                    if (fromPath.includes('u')) {
                        history.push({ pathname: fromPath })
                    } else {
                        history.push({ pathname: '/u/index' })
                    }
                // } else {
                //     console.log(res.data.description)
                // }
            // })
        // }
    }
    return (
        <div className="login">
            <div className="form-login">
                <img src={Icon1} className="login-icon" alt="" />
                <div className="ui left icon input">
                    <input type="text" placeholder="请输入用户名" ref={username} />
                    <i className="user icon" />
                </div>
                <div className="ui left icon input">
                    <input type="password" placeholder="请输入密码" ref={password} />
                    <i className="lock icon" />
                </div>
                <button className="login-btn" onClick={() => login()}>
                    登录
                </button>
            </div>
        </div>
    )
}
export default Login
