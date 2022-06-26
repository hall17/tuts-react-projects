import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'

import footerAdornment from '../../assets/footerAdornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        vertcalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        },
    },
    mainContainer: {
        position: 'absolute',

    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        width: '3em',
        height:'3em',
        [theme.breakpoints.down('xs')] : {
            height:'2em',
            width:'2em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')] : {
            right: '0.6em'
        }
    }
}))

export default function Footer(props) {
    const classes = useStyles()
    const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid justify="center" container className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => setSelectedTab(0)} to='/' className={classes.link}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(0)
                            }}
                                to='/services' className={classes.link}>
                                Services
                        </Grid>
                            <Grid item component={Link} onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(1)
                            }} to='/customsoftware' className={classes.link}>
                                Custom Software Development
                        </Grid>
                            <Grid item component={Link} onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(2)
                            }} to='/mobileapps' className={classes.link}>
                                iOS/Android App Development
                        </Grid>
                            <Grid item component={Link} onClick={() => {
                                setSelectedTab(1)
                                setSelectedServicesIndex(3)
                            }} to='/websites' className={classes.link}>
                                Website Development
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to='/revolution' onClick={() => setSelectedTab(2)} className={classes.link}>
                                The Revolution
                        </Grid>
                            <Grid item component={Link} to='/revolution' onClick={() => setSelectedTab(2)} className={classes.link}>
                                Vision
                        </Grid>
                            <Grid item component={Link} to='/revolution' onClick={() => setSelectedTab(2)} className={classes.link}>
                                Technology
                        </Grid>
                            <Grid item component={Link} to='/revolution' onClick={() => setSelectedTab(2)} className={classes.link}>
                                Process
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to='/about' onClick={() => setSelectedTab(3)} className={classes.link}>
                                About Us
                        </Grid>
                            <Grid item component={Link} to='/about' onClick={() => setSelectedTab(3)} className={classes.link}>
                                History
                        </Grid>
                            <Grid item component={Link} to='/about' onClick={() => setSelectedTab(3)} className={classes.link}>
                                Team
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to='/contact' onClick={() => setSelectedTab(4)} className={classes.link}>
                                Contact Us
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                src={footerAdornment}
                alt="black decorative slash"
                className={classes.adornment}
            />
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={'a'} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="facebook logo" className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt="twitter logo" className={classes.icon}  />
                </Grid>
                <Grid item component={'a'} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="instagram logo"  className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    )
}
