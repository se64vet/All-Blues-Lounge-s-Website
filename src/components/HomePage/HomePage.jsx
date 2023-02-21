import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Card from './Card/Card';
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles();
   
    return (
        
        <>  
            <HomeCarousel typoDisplayTitle='BLUES LOUNGE' typoDisplayButton='Est. 1996'/>
           
            <Box mt="2rem">
            <Grid container justifyContent='center' alignItems='center' spacing={10} direction="column">
                <Grid item xs={12} md={7}>
                    <Typography variant='h5' align='center' gutterBottom>BEST PLACE IN TOWN SINCE 2000</Typography>
                    <Typography variant='body2' align='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis alias excepturi ea culpa. Cum optio, accusantium nihil vitae expedita molestiae 
                    quasi cupiditate debiti quis officia sit maxime alias rerum voluptatum.</Typography>
                </Grid>

                <Card
                imgName='6' title='reserve a table' 
                desc="We're looking to have you here with our best services" 
                button='booking' 
                link="https://bl-reservation.netlify.app/" isExternalLink={true}/>
                
                <Grid item xs={12} style={{position: 'relative'}}>
                    <Typography variant='h6' align='center' style={{padding: "0 1rem"}}>
                        " The night is getting better with this place " <br/> -Dante-
                    </Typography>
                    <img className={classes.img} 
                    src={process.env.PUBLIC_URL + 'assets/divider1.jpg'} 
                    height='300px' width='100%'  alt="divider" />
                </Grid>

                <Grid item xs={12} style={{position: 'relative'}}>
                    {/* <img className={classes.img} 
                    src={process.env.PUBLIC_URL + 'assets/divider2.jpg'} 
                    height='300px' width='100%'  alt="divider" />
                     */}
                    <Button component={Link} to="/Menu" className={classes.drinkMenuBtn} variant='contained' color='secondary'>
                       Drinks Menu
                    </Button>

                </Grid>

                <Card 
                imgName='4' title='our events' desc='Check out our music event every week' 
                button='see all' direction='row-reverse' link='/Event' isExternalLink={false}/>
            </Grid>
            </Box>
            
        </>
        
    )
}

export default HomePage
