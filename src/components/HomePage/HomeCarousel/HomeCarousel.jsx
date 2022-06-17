import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel copy.css";
import { Carousel } from 'react-responsive-carousel';
import { Typography, Button,Grid  } from '@material-ui/core';
import useStyles from './styles'

const HomeCarousel = ({typoDisplayTitle, typoDisplayButton}) => {
    const classes = useStyles();
    const carouselImgs = [1,2,3,4,5,6]
    const carouselItems = carouselImgs.map((carouselImg) =>
        <div key={carouselImg.toString()} style={{height: '100vh'}}>
            <img src={process.env.PUBLIC_URL + `/assets/carousel/${carouselImg}.jpg`} />
        </div>
    
    )
    const carouselConfig = {
        showArrows: true ,
        showThumbs: false ,
        autoPlay: true ,
        infiniteLoop: true ,
        showStatus: false,
        stopOnHover: false,
        interval :  5000,
        transitionTime: 1000,
        showIndicators: false,
    }
    return (
        <div style={{position : 'relative'}}>
        <Grid container className={classes.titleWrapper} alignContent='center' alignItems='center'>
            <Grid item xs={10} md={6} className={classes.title}>
                <Typography variant='h2' color='inherit' gutterBottom>
                    {typoDisplayTitle}
                </Typography>
                <Button component={Link} to='/Shop' className={classes.button} variant='text' color='inherit'>{typoDisplayButton}</Button>
            </Grid>
        </Grid>
        <Carousel {...carouselConfig}>  
            {carouselItems}      
        </Carousel>
        
        </div>
    )
}

export default HomeCarousel
