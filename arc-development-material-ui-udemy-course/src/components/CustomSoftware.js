import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightBulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import roots from '../assets/root.svg'

import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data'
import automationAnimation from '../animations/automationAnimation/data'
import uxAnimation from '../animations/uxAnimation/data'

import CallToAction from './ui/CallToAction'


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5em'
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
    itemContainer: {
        maxWidth: '40em'
    }
}))

export default function CustomSoftware(props) {
    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props

    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    const documentsOptions = {
        loop: true,
        autoplay: false,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Grid container direction="column" >
            <Grid item container direction="row" justify={mdDown ? 'center' : undefined} className={classes.rowContainer} style={{marginTop: xsDown ? '1em' : '2em'}} >
                {/* Back Arrow */}
                <Hidden mdDown>
                    <Grid item
                        className={classes.arrowContainer}
                        style={{ marginRight: '1em', marginLeft: '-3.5em' }}
                    >
                        <IconButton style={{ backgroundColor: 'transparent' }}
                            component={Link} to='/services'
                            onClick={() => setSelectedServicesIndex(0)}
                        >
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                {/* Custom Software Development Section */}
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={mdDown ? 'center' : undefined} variant="h2">Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={mdDown ? 'center' : undefined} variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt iusto veniam reprehenderit accusamus dolore optio, fugiat omnis harum culpa ipsa rerum tempore iure mollitia ipsam accusantium libero, perspiciatis fugit.</Typography>
                        <Typography align={mdDown ? 'center' : undefined} variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sequi explicabo a non eveniet dolorem ipsam cum esse cupiditate modi iusto architecto culpa repudiandae neque, eaque harum dolorum excepturi vel!</Typography>
                        <Typography align={mdDown ? 'center' : undefined} variant="body1" paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae odit voluptas nemo maiores repellendus ipsam assumenda? Dicta illum ut porro? Accusantium dolor obcaecati qui fugit et molestias soluta beatae exercitationem.</Typography>
                    </Grid>
                </Grid>
                {/* Left Arrow */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            component={Link} to='/mobileapps'
                            onClick={() => setSelectedServicesIndex(2)}
                        >
                            <img src={forwardArrow}
                                alt="Forward to iOS/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction="row" justify="center" className={classes.rowContainer}
                style={{ marginTop: '15em', marginBottom: '20em' }}>
                <Grid item container md
                    direction="column"
                    alignItems="center"
                    style={{ maxWidth: '40em' }}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightBulb} alt="lightbulb" />
                    </Grid>
                </Grid>
                <Grid item container
                    direction="column"
                    md alignItems="center"
                    style={{
                        maxWidth: '40em', marginTop: smDown ? '10em' : 0,
                        marginBottom: smDown ? '10em' : 0
                    }}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid item container
                    direction="column"
                    md alignItems="center"
                    style={{ maxWidth: '40em' }}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction={mdDown ? 'column' : 'row'} alignItems={mdDown ? 'center' : undefined} justify="space-around" className={classes.rowContainer} >
                {/* Digital Documents & Data Section */}
                <Grid item container md direction={smDown ? 'column' : 'row'}
                    className={classes.itemContainer}
                    style={{ marginBottom: mdDown ? '15em' : 0 }} >

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={smDown ? 'center' : undefined} variant="h4">Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item md>
                        <Lottie options={documentsOptions} isStopped={true}
                            style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }} />
                    </Grid>
                </Grid>
                {/* Scale Section */}
                <Grid item container md direction={smDown ? 'column' : 'row'}
                    className={classes.itemContainer} >
                    <Grid item md>
                        <Lottie options={scaleOptions} isStopped={true}
                            style={{ maxHeight: 260, maxWidth: 280 }} />
                    </Grid>

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={smDown ? 'center' : 'right'}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={smDown ? 'center' : 'right'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                {/* Root Cause Section */}
                <Grid item container direction="row" style={{ marginTop: '20em', marginBottom: '20em' }}>
                    <Grid item container direction="column" alignItems="center">
                        <Grid item>
                            <img src={roots} alt="tree with roots extending out"
                                height={smDown ? '300em' : '450em'} width={smDown ? '300em' : '450em'} />
                        </Grid>
                        <Grid item className={classes.itemContainer}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Root-Cause Analysis
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus doloremque vel dignissimos aspernatur veniam placeat rem, quasi harum ducimus veritatis dolor quaerat quas quidem, eius ipsum velit iste tempora?
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus doloremque vel dignissimos aspernatur veniam placeat rem, quasi harum ducimus veritatis dolor quaerat quas quidem, eius ipsum velit iste tempora?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction={mdDown ? 'column' : 'row'} alignItems={mdDown ? 'center' : undefined} justify="space-around" style={{ marginBottom: '20em' }} className={classes.rowContainer}>
                {/* Automation Section */}
                <Grid item container md direction={smDown ? 'column' : 'row'} className={classes.itemContainer} style={{ marginBottom: mdDown ? '15em' : 0 }}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={smDown ? 'center' : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                            <Typography align={smDown ? 'center' : undefined} variant="body1" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} isStopped={true}
                            style={{ maxHeight: 290, maxWidth: 280 }} />
                    </Grid>
                </Grid>
                {/* User Experience Design Section */}
                <Grid item container md className={classes.itemContainer} direction={smDown ? 'column' : 'row'} >
                    <Grid item md>
                        <Lottie options={uxOptions} isStopped={true}
                            style={{ maxHeight: 310, maxWidth: 155 }} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={smDown ? 'center' : 'right'}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={smDown ? 'center' : 'right'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit tempora suscipit neque voluptatem! Iure, sint, consequuntur voluptatum neque cum non, vitae nisi deleniti laudantium repudiandae suscipit. A, possimus illo.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setSelectedTab={setSelectedTab} />
            </Grid>
        </Grid>
    )
}
