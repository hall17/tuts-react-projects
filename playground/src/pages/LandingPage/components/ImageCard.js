import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 645,
        background: "rgba(0,0,0,0.5) !important",
        margin: '20px'
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nunito !important',
        fontWeight: 'bold !important',
        fontSize: '2rem !important',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito !important',
        fontSize: '1.1rem !important',
        color: '#ddd',
    }
}))

export default function ImageCard({ place,checked }) {
    const classes = useStyles()
    return (
        <Collapse in={checked}
          {...(checked ? { timeout: 1000 } : {})}
        >
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={place.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                        className={classes.title}>
                        {place.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.desc}>
                        {place.description}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}