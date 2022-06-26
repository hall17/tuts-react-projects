import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = (props) => {

    const { component: Component, ...rest } = props

    return (
        <Route {...rest} render={(props) => {
            return <Component {...props} />
        }} />
    )
}

export default PublicRoute
