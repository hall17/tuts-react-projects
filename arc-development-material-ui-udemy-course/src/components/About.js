import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, IconButton, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';

import history from '../assets/history.svg'
import profile from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'

import CallToAction from './ui/CallToAction'

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: '1.5rem',
        maxWidth: '50em',
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
    avatar: {
        height: '25em',
        width: '25em',
        [theme.breakpoints.down('sm')]: {
            height: '20em',
            width: '20em',
            maxHeight: 300,
            maxWidth: 300
        }
    }
}))

export default function About(props) {

    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props

    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))


    return (
        <Grid container direction="column">
            {/* About us */}
            <Grid item
                className={classes.rowContainer}
                style={{ marginTop: mdDown ? '1em' : '2em' }}
            >
                <Typography variant="h2"
                    align={mdDown ? 'center' : undefined}
                >
                    About Us</Typography>
            </Grid>

            <Grid item container
                justify="center"
                className={classes.rowContainer}
                style={{ marginTop: '3em' }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.missionStatement}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente reiciendis consectetur ipsa molestias nesciunt odio possimus aspernatur delectus ducimus placeat, alias officiis labore expedita, consequatur eos praesentium? Nam, illo accusamus.
                </Typography>
            </Grid>

            {/* History Section */}
            <Grid item container
                className={classes.rowContainer}
                justify="space-around"
                direction={mdDown ? "column" : "row"}
                alignItems={mdDown ? "center" : undefined}
                style={{ marginTop: '10em', marginBottom: '10em' }}
            >
                <Grid item>
                    <Grid item container direction="column" lg
                        style={{ maxWidth: '35em' }}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom
                                align={mdDown ? 'center' : undefined}
                            >
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1"
                                paragraph
                                align={mdDown ? 'center' : undefined}
                                style={{ fontWeight: 700, fontStyle: 'italic' }}
                            >
                                We're the new kid on the block.
                    </Typography>
                            <Typography variant="body1"
                                paragraph
                                align={mdDown ? 'center' : undefined}
                            >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fuga saepe eos odit hic eaque itaque, quod voluptatem optio totam, quidem modi ex maiores porro nemo natus quibusdam, eius molestias?
                    </Typography>
                            <Typography variant="body1"
                                paragraph
                                align={mdDown ? 'center' : undefined}
                            >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fuga saepe eos odit hic eaque itaque, quod voluptatem optio totam, quidem modi ex maiores porro nemo natus quibusdam, eius molestias?
                    </Typography>
                            <Typography variant="body1"
                                paragraph
                                align={mdDown ? 'center' : undefined}
                            >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fuga saepe eos odit hic eaque itaque, quod voluptatem optio totam, quidem modi ex maiores porro nemo natus quibusdam, eius molestias?
                    </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={history}
                            alt="quill pen sitting on top of book"
                            style={{ maxHeight: mdDown ? 200 : '22em' }}
                            width="100%" />
                    </Grid>
                </Grid>
            </Grid>

            {/* Team Section */}
            <Grid item container direction="column"
                align="center"
                className={classes.rowContainer}
                style={{ marginBottom: '15em' }}
            >
                <Grid item>
                    <Typography variant="h4" align="center" gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Halil Akgun , Developer
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        Let's code
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar} />
                </Grid>
                <Grid item container
                    justify={mdDown ? 'center' : undefined}
                >
                    <Hidden lgUp>
                        <Grid item lg
                            style={{ maxWidth: '45em', padding: '1.25em' }}
                        >
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum vel placeat, autem blanditiis rerum architecto, et eum quibusdam enim reprehenderit, delectus ea accusamus quia hic modi ab! Iure, perspiciatis?
                        </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum vel placeat, autem blanditiis rerum architecto, et eum quibusdam enim reprehenderit, delectus ea accusamus quia hic modi ab! Iure, perspiciatis?
                        </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container lg
                        direction="column"
                        alignItems={mdDown ? 'center' : undefined}
                        style={{ marginBottom: mdDown ? '2.5em' : 0 }}
                    >
                        <Grid item>
                            <img src={yearbook}
                                alt="yearbook page about founder"
                                style={{ maxWidth: mdDown ? 300 : undefined }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page from my Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg
                            style={{ maxWidth: '45em', padding: '1.25em' }}
                        >
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum vel placeat, autem blanditiis rerum architecto, et eum quibusdam enim reprehenderit, delectus ea accusamus quia hic modi ab! Iure, perspiciatis?
                        </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum vel placeat, autem blanditiis rerum architecto, et eum quibusdam enim reprehenderit, delectus ea accusamus quia hic modi ab! Iure, perspiciatis?
                        </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container lg
                        direction="column"
                        alignItems={mdDown ? 'center' : "flex-end"}
                    >
                        <Grid item>
                            <img src={puppy} alt="grey spotted puppy"
                                style={{ maxWidth: mdDown ? 300 : undefined }}

                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                my miniature dapple dachshund,
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
