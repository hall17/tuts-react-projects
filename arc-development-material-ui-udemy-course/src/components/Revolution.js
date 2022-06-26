import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, IconButton, Typography } from '@material-ui/core'

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'




import technologyAnimation from '../animations/technologyAnimation/data'
import Lottie from 'react-lottie'


const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
}))

export default function Revolution(props) {
    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))


    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            {/* The Revolution - Title */}
            <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
                <Typography variant="h2" align={mdDown ? 'center' : undefined} style={{ fontFamily: 'Pacifico' }}>The Revolution</Typography>
            </Grid>

            {/* Vision section */}
            <Grid item container
                direction={mdDown ? 'column' : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{ marginTop: '5em' }}
            >
                <Grid item lg>
                    <img src={vision} alt="mountain through binoculars"
                        style={{
                            maxWidth: smDown ? 300 : '40em',
                            marginRight: mdDown ? 0 : '5em',
                            marginBottom: mdDown ? "5em" : 0
                        }} />
                </Grid>

                <Grid item container lg direction="column" style={{ maxWidth: '40em' }}>
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : "right"} gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : "right"} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : "right"} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : "right"} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : "right"} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : "right"} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* Technology section */}
            <Grid item container
                direction={mdDown ? 'column' : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{ marginTop: '10em', marginBottom: '10em' }}
            >

                <Grid item container lg direction="column" style={{ maxWidth: '40em' }}>
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tenetur voluptatem architecto magni nisi adipisci tempora at, laborum atque? Hic impedit exercitationem qui temporibus tempore laborum cum illum dolorem!</Typography>
                    </Grid>
                </Grid>

                <Grid item container justify={mdDown ? 'center' : "flex-end"} lg>
                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: '30em', margin: 0 }} />
                </Grid>
            </Grid>

            {/* Process Section */}
            <Grid item container
                direction="row"
                justify="center"
                className={classes.rowContainer}
            >
                <Grid item>
                    <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom >
                        Process
                    </Typography>
                </Grid>
            </Grid>

            {/* Consultation */}
            <Grid item container
                direction={mdDown ? 'column' : "row"}
                className={classes.rowContainer}
                style={{ backgroundColor: '#B3B3B3', height: '90em' }}
            // alignItems={mdDown ? 'center' : undefined}
            >
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Consultation
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff', maxWidth: '20em' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff', maxWidth: '20em' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff', maxWidth: '20em' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={consultation} alt="handshake"
                        width="100%"
                        style={{ maxWidth: 700 }} />
                </Grid>
            </Grid>

            {/* Mockup */}
            <Grid item container
                direction={mdDown ? 'column' : "row"}
                className={classes.rowContainer}
                style={{ backgroundColor: '#ff7373', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Mockup
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={mockup} alt="basic website design outline"
                        style={{ maxWidth: 1000 }} width="100%"
                    />
                </Grid>
            </Grid>

            {/* Review */}
            <Grid item container
                direction="row"
                className={classes.rowContainer}
                style={{ backgroundColor: '#93b54A', height: '90em' }}
            >
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff'}} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={review} alt="magnifying glass"
                        width="100%"
                    />
                </Grid>
            </Grid>

            {/* Design */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#a67c52', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={mdDown ? "center" : undefined} style={{ color: '#000', marginTop: '5em' }}>
                            Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={design} alt="paintbrush leaving stroke of paint"
                        style={{ maxWidth: 1000 }} width="100%"

                    />
                </Grid>
            </Grid>


            {/* Review */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#39b54a', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={review} alt="magnifying glass"
                        width="100%" />
                </Grid>
            </Grid>

            {/* Build */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#fbb03b', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={mdDown ? "center" : undefined} style={{ color: '#000', marginTop: '5em' }}>
                            Build
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={build} alt="building construction site"
                        style={{ maxWidth: mdDown ? 700 : 1000 }}
                        width="100%"
                    />
                </Grid>
            </Grid>

            {/* Launch */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#c1272d', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Launch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff'}} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={launch} alt="rocket"
                        style={{ maxWidth: 200 }}
                        width="100%"

                    />
                </Grid>
            </Grid>


            {/* Maintain */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#8345ce', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Maintain
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={maintain} alt="wrench tightening bolts"
                        style={{ maxWidth: 500 }}
                        width="100%"
                    />
                </Grid>
            </Grid>

            {/* Iterate */}
            <Grid item container direction="row" className={classes.rowContainer}
                style={{ backgroundColor: '#29abe2', height: '90em' }}>
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={mdDown ? "center" : undefined} gutterBottom style={{ color: '#000', marginTop: '5em' }}>
                            Iterate
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                        <Typography variant="body1" align={mdDown ? "center" : undefined} style={{ color: '#fff' }} paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maiores reiciendis, consequatur dolor exercitationem minima repellendus! Repellat, voluptas sequi dolorem iste explicabo ipsa quas incidunt, optio, aliquid fugit totam?</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: 'center' }}>
                    <img src={iterate} alt="falling dominoes"
                    width="100%" />
                </Grid>
            </Grid>

        </Grid>
    )
}
