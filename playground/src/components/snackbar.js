import { Alert, Snackbar } from "@mui/material";

import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from '../redux/redux_toolkit/snackbar';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../utils/constants';

const INFO_SNACKBAR_AUTO_HIDE_DURATION = 5000;


const CustomSnackbar = (props) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const snackbar = useSelector((state) => state.snackbar);

    useEffect(() => {
        setOpen(snackbar?.isOpen)
    }, [snackbar])

    const onClose = () => {
        setOpen(false)
    }

    const onExited = () => {
        dispatch(hideSnackbar())
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            onClose={onClose}
            onExited={onExited}
            transitionDuration={{ enter: 150, exit: 150 }}
            autoHideDuration={INFO_SNACKBAR_AUTO_HIDE_DURATION}
        >
            <Alert
                severity={snackbar?.type || 'success'}
                elevation={6}
                onClose={onClose}
            >
                {snackbar?.message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbar
