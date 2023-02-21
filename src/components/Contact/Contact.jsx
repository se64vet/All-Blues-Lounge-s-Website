import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import useStyle from "./styles"
const Contact = () => {
    const classes = useStyle()
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' spacing={10} direction="row">
                <Grid item xs={12} className={classes.imgWrapper}>
                <img className={classes.img} src={process.env.PUBLIC_URL + `/assets/carousel/4.jpg`} alt="divider" />
                </Grid>

                <Grid item xs={10} md={4} className={classes.info}>
                    <Typography variant="h3">
                        All Blues Lounge
                    </Typography>
                    <Typography variant="body1">
                        Address: 2569 Brooklyn, NY
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Tel: (865) 347 9653
                    </Typography>

                    <Typography variant="body1" gutterTop>
                        Hi, my Name is Dante and I really appreciate if you want to work with me. You can always send me a message at Email: 
                         <a href="email: dante.mai96@gmail.com"  style={{color: 'orange'}}>dante.mai96@gmail.com</a> or Phone:  
                         <a href="tel: 865 347 9654" style={{color: 'orange'}}>865 347 9653</a>
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={4} className={classes.mapouter}>
                <div className={classes.gmap_canvas}>
                    <iframe 
                    title='map'
                    width="600" 
                    height="500" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                </div>
            </Grid>
            </Grid>
            
        </>
    )
}

export default Contact
