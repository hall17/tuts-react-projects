import { makeStyles } from '@mui/styles';

import React from 'react'
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',

    }
}))

const LandingPage = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Header />
                <PlaceToVisit />
                
            </div>
        </>
    )
}

export default LandingPage