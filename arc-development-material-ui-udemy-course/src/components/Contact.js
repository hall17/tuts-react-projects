import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, IconButton, Button, Typography, TextField, Snackbar } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress'
// Api Requests
import { sendEmail, sendEmailReject } from '../services/index'


import ButtonArrow from './ui/ButtonArrow'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'

import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.75rem',
        height: 35,
        padding: 12,
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5,

    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 225
        }
    }
}))

export default function Contact(props) {
    const { setSelectedTab } = props

    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [nameHelper, setNameHelper] = useState('')
    const [emailHelper, setEmailHelper] = useState('')
    const [phoneHelper, setPhoneHelper] = useState('')


    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({ open: false, message: '', backgroundColor: '' })


    const onChange = e => {
        let valid;

        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                    .test(e.target.value)
                if (!valid) {
                    setEmailHelper("Invalid email")
                } else {
                    setEmailHelper('')
                }
                break;
            case "phone":
                setPhone(e.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                    .test(e.target.value)
                if (!valid) {
                    setPhoneHelper("Invalid phone")
                } else {
                    setPhoneHelper('')
                }
                break;
            default:
                break;

        }
    }

    const onConfirm = () => {
        setLoading(true)
        sendEmail({ name: name, email: email, phone: phone, message: message })
            .then(res => {
                setLoading(false)
                console.log(res)
                setOpen(false)
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setAlert({
                    open: true,
                    message: res,
                    backgroundColor: '#4BB543'
                })
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                setAlert({
                    open: true,
                    message: err,
                    backgroundColor: '#FF3232'
                })
            })
    }

    const buttonContents = (
        <>
            Send Message
            <img src={airplane} alt="paper airplane"
                style={{ marginLeft: '1em' }} />
        </>
    )

    return (
        <Grid container direction="row">
            <Grid item container lg={4} xl={3}
                justify="center"
                alignItems="center"
                direction="column"
                style={{
                    marginBottom: mdDown ? '5em' : 0,
                    marginTop: smDown ? '1em' : mdDown ? '5em' : 0
                }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2"
                                align={mdDown ? 'center' : undefined}
                                style={{ lineHeight: 1 }}
                            >
                                Contact Us
                    </Typography>
                            <Typography variant="body1"
                                align={mdDown ? 'center' : undefined}
                                style={{ color: theme.palette.common.blue }}
                            >
                                We are waiting
                    </Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: '2em' }}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone"
                                    style={{ marginRight: '0.5em' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1"
                                    style={{
                                        color: theme.palette.common.blue,
                                        fontSize: '1rem'
                                    }}
                                >
                                    <a href="tel:55555555555" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        (555) 555-5555
                                   </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: '2em' }}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope"
                                    style={{ marginRight: '0.5em' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
                                    <a
                                        href="mailto:zachary@gmail.com"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        zachary@gmail.com
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item container
                            direction="column"
                            style={{ width: '20em' }} >
                            <Grid item
                                style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    label="Name"
                                    id="name"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    label="Email"
                                    id="email"
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    fullWidth
                                    value={email}
                                    onChange={onChange}

                                />
                            </Grid>
                            <Grid item style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    label="Phone"
                                    id="phone"
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    fullWidth
                                    value={phone}
                                    onChange={onChange}

                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ width: '20em' }}>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                multiline
                                rows={10}
                                fullWidth
                                className={classes.message}
                                value={message}
                                placeholder="Tell us more about your project"
                                id="message"
                                onChange={e => setMessage(e.target.value)}
                            />
                        </Grid>
                        <Grid item container
                            justify="center"
                            style={{ marginTop: '2em' }}
                        >
                            <Button variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                                onClick={() => setOpen(true)}
                            >
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                fullScreen={smDown}
                onClose={() => setOpen(false)}
                style={{
                    zIndex: 1302
                }}
                PaperProps={{
                    style: {
                        paddingTop: xsDown ? '1em' : '5em',
                        paddingBottom: xsDown ? '1em' : '5em',
                        paddingLeft: xsDown ? 0 : (
                            smDown ? '5em' : mdDown ? '15em' : '25em'),
                        paddingRight: xsDown ? 0 : (
                            smDown ? '5em' : mdDown ? '15em' : '25em'),
                    }
                }}
            >
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom
                                align="center">
                                Confirm Message
                            </Typography>
                        </Grid>
                        <Grid item
                            style={{ marginBottom: '0.5em' }}>
                            <TextField
                                label="Name"
                                id="name"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: '0.5em' }}>
                            <TextField
                                label="Email"
                                id="email"
                                error={emailHelper.length !== 0}
                                helperText={emailHelper}
                                fullWidth
                                value={email}
                                onChange={onChange}

                            />
                        </Grid>
                        <Grid item style={{ marginBottom: '0.5em' }}>
                            <TextField
                                label="Phone"
                                id="phone"
                                error={phoneHelper.length !== 0}
                                helperText={phoneHelper}
                                fullWidth
                                value={phone}
                                onChange={onChange}

                            />
                        </Grid>
                        <Grid item style={{ maxWidth: smDown ? '100%' : '20em' }}>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                multiline
                                rows={10}
                                fullWidth
                                className={classes.message}
                                value={message}
                                id="message"
                                onChange={e => setMessage(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container
                        style={{ marginTop: '2em' }}
                        alignItems="center"
                        direction={smDown ? 'column' : 'row'}>
                        <Grid item>
                            <Button style={{ fontWeight: 300 }} color="primary"
                                onClick={() => setOpen(false)}>
                                Cancel
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || 
                                message.length === 0 || 
                                email.length === 0 || 
                                phone.length === 0 || 
                                phoneHelper.length !== 0 
                                || emailHelper.length !== 0}
                                onClick={onConfirm}
                            >
                                {loading ? <CircularProgress /> : buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message}
                ContentProps={{
                    style: {
                        backgroundColor: alert.backgroundColor
                    }
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={3000} />
            <Grid item container lg={8} xl={9}
                alignItems="center"
                className={classes.background}
                direction={mdDown ? "column" : "row"}
                justify={mdDown ? 'center' : undefined}
            >
                <Grid item
                    style={{
                        marginLeft: mdDown ? 0 : '3em',
                        textAlign: mdDown ? "center" : "inherit"
                    }}
                >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={mdDown ? "center" : undefined} variant="h2">
                                Simple Software.
                            <br />
                            Revolutionary Results.
                        </Typography>
                            <Typography variant="subtitle2"
                                align={mdDown ? "center" : undefined}
                                style={{ fontSize: '1.5rem' }}
                            >
                                Take advantage of the 21st century.
                        </Typography>
                            <Grid container justify={mdDown ? 'center' : undefined} item>
                                <Button
                                    variant="outlined"
                                    className={classes.learnButton}
                                    component={Link} to='/revolution'
                                    onClick={() => setSelectedTab(2)}
                                >
                                    <span style={{ marginRight: 5 }}>Learn More</span>
                                    <ButtonArrow
                                        width={10} height={10}
                                        fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        className={classes.estimateButton}
                        component={Link} to='/estimate'
                        onClick={() => setSelectedTab(5)}

                    >Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}
