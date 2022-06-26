import { RouterSharp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTES } from '../utils/constants'
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {

    const { isAuth: isAuth, component: Component, ...rest } = props

    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(user.id || false)

    return (
        <Route {...rest} render={(props) => {
            if (loggedIn) {
                return <Component {...props} />
            }
            else {
                return <Redirect to={ROUTES.LOGIN} />
            }
        }} />
    )
}

export default ProtectedRoute
