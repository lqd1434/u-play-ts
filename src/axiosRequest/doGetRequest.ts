import axios from 'axios'

export const doGetRequest = (url: string) =>
    new Promise((resolve) => {
        axios({
            url,
            method: 'get',
        }).then((res) => {
            resolve(res)
        })
    })

export const doAuthGetAxios = (url: string, token: string) =>
    new Promise((resolve) => {
        axios({
            url,
            method: 'get',
            headers: {
                myToken: token,
            },
        }).then((res) => {
            resolve(res.data)
        })
    })
export const doLogoutAuth = (token: string) =>
    new Promise((resolve) => {
        axios({
            url: '/api/logout',
            method: 'get',
            headers: {
                myToken: token,
            },
        }).then((res) => {
            resolve(res.data)
        })
    })
