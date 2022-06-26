import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'

import integrationAnimation from '../animations/integrationAnimation/data'

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
}))

export default function MobileApps(props) {
    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props


    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Grid container direction="column">
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
                            component={Link} to='/customsoftware'
                            onClick={() => setSelectedServicesIndex(1)}
                        >
                            <img src={backArrow} alt="Back to Custom Software Development Page" />
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
                            iOS/Android App Development
                        </Typography>
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
                            component={Link} to='/websites'
                            onClick={() => setSelectedServicesIndex(3)}
                        >
                            <img src={forwardArrow}
                                alt="Forward to Website Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container
                direction={smDown ? 'column' : "row"}
                className={classes.rowContainer}
                style={{ marginTop: '15em', marginBottom: '15em' }}>

                {/* Integration */}
                <Grid item container md direction="column">
                    <Grid item>
                        <Typography variant="h4" align={smDown ? 'center' : undefined} gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in, consequatur temporibus labore recusandae necessitatibus dicta veritatis suscipit ab ducimus fugit, dignissimos explicabo soluta enim sequi odio excepturi quo fugiat.</Typography>
                        <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in, consequatur temporibus labore recusandae necessitatibus dicta veritatis suscipit ab ducimus fugit, dignissimos explicabo soluta enim sequi odio excepturi quo fugiat.</Typography>
                        <Typography variant="body1" align={smDown ? 'center' : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in, consequatur temporibus labore recusandae necessitatibus dicta veritatis suscipit ab ducimus fugit, dignissimos explicabo soluta enim sequi odio excepturi quo fugiat.</Typography>
                    </Grid>
                </Grid>

                {/* Cross Platform Animation */}
                <Grid item md>
                    <Lottie options={defaultOptions} isStopped={true}
                        style={{ maxWidth: '25em' }} />
                </Grid>

                {/* Simultaneous Platform Support */}
                <Grid item container md direction="column">
                    <Grid item>
                        <Typography align={smDown ? 'center' : 'right'}  variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={smDown ? 'center' : 'right'}  variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in, consequatur temporibus labore recusandae necessitatibus dicta veritatis suscipit ab ducimus fugit, dignissimos explicabo soluta enim sequi odio excepturi quo fugiat.</Typography>
                        <Typography align={smDown ? 'center' : 'right'}  variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in, consequatur temporibus labore recusandae necessitatibus dicta veritatis suscipit ab ducimus fugit, dignissimos explicabo soluta enim sequi odio excepturi quo fugiat.</Typography>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item container
                direction={mdDown ? 'column' : "row"}
                className={classes.rowContainer}
                style={{ marginBottom: '15em' }}>
                {/* Extend Functionality */}
                <Grid item container md direction="column" alignItems="center" style={{ marginTop: mdDown ? '10em' : 0, marginBottom: mdDown ? '10em' : 0 }}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" />
                    </Grid>
                </Grid>

                {/* Extend Access */}
                <Grid item container md direction="column" alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign"
                            style={{ maxWidth: xsDown ? '20em' : '28em' }} />
                    </Grid>
                </Grid>

                {/* Increase Engagement */}
                <Grid item container md direction="column" alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setSelectedTab={setSelectedTab} />
            </Grid>
        </Grid>
    )
}
