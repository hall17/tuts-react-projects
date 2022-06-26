import React from 'react'
import { Link } from 'react-router-dom'

// Material UI Functions
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
// Material UI Components
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// Custom Components
import ButtonArrow from './ButtonArrow'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.75rem',
        height: 35,
        padding: 12,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit'
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
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0
        }
    }
}))

export default function CallToAction(props) {
    const { setSelectedTab } = props

    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid
            container
            alignItems="center"
            justify={smDown ? "center" : "space-between"}
            className={classes.background}
            direction={smDown ? "column" : "row"}
        >
            <Grid item
                style={{
                    marginLeft: smDown ? 0 : '5em',
                    textAlign: smDown ? "center" : "inherit"
                }}
            >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software.
                            <br />
                            Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2"
                            style={{ fontSize: '1.5rem' }}
                        >
                            Take advantage of the 21st century.
                        </Typography>
                        <Grid container justify={smDown ? 'center' : undefined} item>
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

                >Free Estimate</Button>
            </Grid>
        </Grid>
    )
}
