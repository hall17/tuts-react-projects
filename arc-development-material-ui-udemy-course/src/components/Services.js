import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/customSoftware.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.75rem',
        height: 35,
        padding: 12,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
}))

export default function Services(props) {
    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props

    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container direction="column">
            <Grid item style={{ marginLeft: smDown ? 0 : '5em',
            marginTop: smDown ? '1em' : '2em' }}>
                <Typography
                    align={smDown ? 'center' : undefined}
                    variant="h2" gutterBottom
                >
                    Services
                </Typography>
            </Grid>
            <Grid item>
                {/* iOS/Android Block */}
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={smDown ? 'center' : 'flex-end'}
                    style={{ marginTop: smDown ? '1em' : '5em' }}
                >
                    <Grid item
                        style={{
                            textAlign: smDown ? 'center' : undefined,
                            width: smDown ? undefined : '35em'
                        }}
                    >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or  create a standalone app
                            {smDown ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button
                            variant="outlined"
                            className={classes.learnButton}
                            component={Link} to='/mobileapps'
                            onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(2)
                            }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item
                        style={{ marginRight: smDown ? 0 : '5em' }}
                    >
                        <img
                            className={classes.icon}
                            src={mobileAppsIcon}
                            width="250em"
                            alt="mobile phone icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* Custom Software Block */}
                <Grid
                    container direction="row"
                    className={classes.serviceContainer}
                    justify={smDown ? 'center' : undefined}
                >
                    <Grid item style={{ marginLeft: smDown ? 0 : '5em', textAlign: smDown ? 'center' : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button
                            variant="outlined"
                            className={classes.learnButton}
                            component={Link} to='/customsoftware'
                            onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(1)
                            }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* Websites Block */}
                <Grid
                    container direction="row"
                    className={classes.serviceContainer}
                    justify={smDown ? 'center' : "flex-end"}
                    style={{ marginBottom: '10em' }}
                >
                    <Grid item
                        style={{
                            textAlign: smDown ? 'center' : undefined,
                            width: smDown ? undefined : '35em'
                        }}
                    >
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button
                            variant="outlined"
                            className={classes.learnButton}
                            component={Link} to='/websites'
                            onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(3)
                            }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: smDown ? 0 : '5em', }}>
                        <img
                            className={classes.icon}
                            src={websiteIcon}
                            width="250em"
                            alt="website icon" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
