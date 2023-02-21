import React , {useState} from 'react'
import { Grid, Typography, Link, Button, Box, Hidden, FormControl, Input, InputLabel, CssBaseline} from '@material-ui/core'
import { Twitter, Facebook, Instagram, Pinterest, Favorite } from '@material-ui/icons'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()
    const [newGuestEmail, setNewGuestEmail] = useState('');

    const handleChange = (event) => {
        setNewGuestEmail(event.target.value);
      };
    return (

        <>
        <CssBaseline />
        <footer>
            <Grid container className={classes.footerGrid}>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>BLUES LOUNGE</Typography>
                    <Hidden smDown>
                        <Typography variant='caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus qui quae consequatur. Id, voluptatibus.</Typography>
                    </Hidden>    
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>GET SPECIAL OFFERS FROM US </Typography>
                    <FormControl style={{flexDirection: 'row', gap: '10px', alignItems: 'flex-end'}}>
                        <InputLabel style={{color: 'white'}} htmlFor="guest_email" color='inherit'>Your Email</InputLabel>
                        <Input id="guest_email" value={newGuestEmail} onChange={handleChange} color='secondary' />
                        <Box paddingTop='5px'>
                        <Button variant='contained' color='secondary' size='small'>Submit</Button>
                        </Box>   
                    </FormControl> 
                </Grid>

                <Grid item xs={10}>
                    <hr/>
                </Grid>
                
                <Grid item  xs={9} sm={3} >                   
                    <Typography variant='h6'>COMPANY</Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>About Us</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>Career</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>FAQs</Link></Typography>
                </Grid>
                
                <Grid item  xs={9} sm={3} >                   
                    <Typography variant='h6'>SERVICES</Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>Delivery</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>Customer Services</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>Help & Support</Link></Typography>
                </Grid>

                <Grid item  xs={9} sm={3} >                   
                    <Typography variant='h6'>INFORMATIONS</Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>Offers</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>COVID-19 Infomation</Link></Typography>
                    <Typography variant='body2'><Link href='#' color='inherit'>RUG Guide</Link></Typography>
                </Grid>
                
                
                <Grid item xs={12} >
                    <div>
                    <Facebook/> <Instagram/> <Twitter/> <Pinterest />
                    </div>
                    <Typography variant='overline'> © 2021 by Dante with <Favorite color='secondary'/></Typography> 
                </Grid>
            </Grid>
            
        </footer>
        </>
    )
}

export default Footer
