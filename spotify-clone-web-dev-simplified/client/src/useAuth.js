import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        })
            .then(res => {
                console.log(res.data)
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                // console.log(res.data.refreshToken)
                window.history.pushState({}, null, '/')
            })
            .catch((err) => {
                console.log(err)
                // window.location = '/'
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const timeout = setInterval(() => {
            console.log('calling the refresh', refreshToken, expiresIn)
            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            })
                .then(res => {
                    console.log(res.data)
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch(() => {
                    window.location = '/'
                })
        }, (expiresIn - 60) * 1000);
        return () => clearTimeout(timeout)
    }, [refreshToken, expiresIn])

    return accessToken
}
