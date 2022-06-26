import { Grid, Hidden, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

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
    paragraphContainer: {
        maxWidth: '30em'
    }
}))
export default function Websites(props) {
    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: false,
    //     animationData: integrationAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // }

    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid item container direction="column">
            <Grid item container direction="row"
                justify={mdDown ? 'center' : 'space-between'}
                className={classes.rowContainer}
                style={{ marginTop: xsDown ? '1em' : '2em' }} >
                {/* Back Arrow */}
                <Hidden mdDown>
                    <Grid item
                        className={classes.arrowContainer}
                        style={{ marginRight: '1em', marginLeft: '-3.5em' }}
                    >
                        <IconButton style={{ backgroundColor: 'transparent' }}
                            component={Link} to='/mobileapps'
                            onClick={() => setSelectedServicesIndex(2)}
                        >
                            <img src={backArrow} alt="Back to iOS/Android Development Page" />
                        </IconButton>

                    </Grid>
                </Hidden>
                {/* Custom Software Development Section */}
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography
                            align="center"
                            variant="h2"
                        >
                            Website Development
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={mdDown ? 'center' : undefined} variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt iusto veniam reprehenderit accusamus dolore optio, fugiat omnis harum culpa ipsa rerum tempore iure mollitia ipsam accusantium libero, perspiciatis fugit.</Typography>
                        <Typography align={mdDown ? 'center' : undefined} variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sequi explicabo a non eveniet dolorem ipsam cum esse cupiditate modi iusto architecto culpa repudiandae neque, eaque harum dolorum excepturi vel!</Typography>
                    </Grid>
                </Grid>
                {/* Left Arrow */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            component={Link} to='/services'
                            onClick={() => setSelectedServicesIndex(0)}
                        >
                            <img src={forwardArrow}
                                alt="Forward to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            {/* Analytics */}
            <Grid item container
                direction={smDown ? 'column' : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{ marginTop: '15em' }}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics}
                                alt="graph with magnifying glass revealing 1's and 0's"
                                style={{ marginLeft: '-2.75em' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={smDown ? 'center' : undefined} variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis placeat non provident exercitationem molestiae nulla quos maxime voluptatibus rerum! Molestiae temporibus quibusdam laudantium facere quia, beatae dolores officia odio earum!
                    </Typography>
                </Grid>
            </Grid>

            {/* E-Commerce */}
            <Grid item container
                direction={smDown ? 'column' : "row"}
                alignItems="center"
                justify="flex-end"
                className={classes.rowContainer}
                style={{ marginBottom: '15em', marginTop: '15em' }}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce}
                                alt="world outline made of dollar signs"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: smDown ? 0 : '1em' }} className={classes.paragraphContainer}>
                    <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph >
                        It's no secret that people like to shop online.
                    </Typography>
                    <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>
                        In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>

            {/* Outreach */}
            <Grid item container
                direction={smDown ? 'column' : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{ marginBottom: '15em', marginTop: '15em' }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={smDown ? 'center' : undefined} variant="h4" gutterBottom>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach}
                                alt="megaphone"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: smDown ? 0 : '1em' }} className={classes.paragraphContainer}>
                    <Typography variant="body1" align={smDown ? 'center' : undefined}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis placeat non provident exercitationem molestiae nulla quos maxime voluptatibus rerum! Molestiae temporibus quibusdam laudantium facere quia, beatae dolores officia odio earum!
                    </Typography>
                </Grid>
            </Grid>

            {/* SEO */}
            <Grid item container
                direction={smDown ? 'column' : "row"}
                alignItems="center"
                justify="flex-end"
                className={classes.rowContainer}
                style={{ marginBottom: '15em', marginTop: '15em' }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine<br />Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo}
                                alt="website standing on winner's podium"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: smDown ? 0 : '1em' }}
                    className={classes.paragraphContainer}
                >
                    <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>
                        If you're like us, probably never.
                    </Typography>
                    <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>
                        Customer don't go there either, so we make sure your website is designed to end up on top
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setSelectedTab={setSelectedTab} />
            </Grid>
        </Grid>
    )
}
