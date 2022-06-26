import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'

// MUI
import { Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';

// Services
import UserService from '../services/UserService';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../redux/redux_toolkit/user';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../utils/constants';
import { showSnackbar } from '../redux/redux_toolkit/snackbar';


const Login = (props) => {
    const { t } = props
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userService = new UserService()
    const dispatch = useDispatch();
    const history = useHistory();



    const handleLogin = async () => {

        setIsLoading(true)

        userService.login(email, password)
            .then(user => {
                // set user in redux
                dispatch(setUser(user))
                console.log(t('loginSuccess'))
                dispatch(showSnackbar({ message: t('loginSuccess'), type: 'success' }))

                history.push(ROUTES.PROFILE)
            })
            .catch(e => {
                setIsLoading(false)
            })
    }

    return (
        <div>
            Login Page
            <LoadingButton loading={isLoading} onClick={handleLogin}>Login</LoadingButton>
        </div>
    )
}

export default withTranslation()(Login)
