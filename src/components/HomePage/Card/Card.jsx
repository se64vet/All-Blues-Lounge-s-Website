import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import useStyle from './styles'
import { Link } from 'react-router-dom';

const Card = ({imgName, title, desc, button, direction, link, isExternalLink}) => {
    const classes = useStyle();
    const urlConfig = (urlStr)=>{
        if(isExternalLink===true){
            return {pathname: urlStr}
        }else{
            return urlStr
        }
    }
    return (
        <>
        <Grid item xs={12} container justifyContent='space-evenly' alignItems='center' direction={direction} spacing={5}>
            <Grid item xs={10} md = {6}>
                <img className={classes.img} 
                src={process.env.PUBLIC_URL + `assets/carousel/${imgName}.jpg`} 
                height='400px' width='100%'  alt="divider" />
            </Grid>
            <Grid item xs={10} md={4} lg={3}>
                <Box className={classes.reservationCard} p="2rem">
                    <Typography variant='h6' gutterBottom> {title.toUpperCase()} </Typography>
                    <Typography variant='body2' display='block' gutterBottom> {desc} </Typography>
                    <Button variant='outlined' color='primary' component={Link} to={urlConfig(link)} target={isExternalLink ? "_blank" : "_self"} >{button.toUpperCase()}</Button>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Card
