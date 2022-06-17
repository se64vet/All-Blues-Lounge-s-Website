import React, {useState, useEffect} from 'react'
import myjson from '../../data.json'
import { Typography, Button, Grid, Box } from '@material-ui/core';
import useStyle from './styles'
const MenuPage = () => {
    const classes = useStyle();
    const datajson = myjson
    const classic = datajson["classic-drinks"]
    const noAlcohol = datajson["alcohol-free"]
    const cocktails = datajson["cocktails"]
    console.log(classic)
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' spacing={10} direction="column" >
                <Grid item xs={12}>
                    <img className={classes.img} src={process.env.PUBLIC_URL + `/assets/carousel/2.jpg`} alt="divider" />
                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' spacing={10} direction="column">
                
                <Grid className={classes.menuWrapper} container item xs={11} md={8} lg={5} justifyContent='center' alignItems='center' direction="column">
                    <Typography variant='h3' className={classes.menuCat}>Classic Drinks</Typography>
                    {classic.map((drink) => {
                        return(
                            <Grid item xs={10} className={classes.menuItem}>
                                <Typography variant='h5' className={classes.itemName} gutterBottom>
                                    {drink.name}
                                </Typography>
                                <Typography variant='body1' className={classes.itemPrice}> ${drink.price} </Typography>
                                <Typography variant='body2'className={classes.itemDesc}>
                                    {drink.desc}
                                </Typography>
                            </Grid>
                        )
                        
                    })}
                    <Typography variant='h3' className={classes.menuCat}>Cocktails</Typography>
                    {cocktails.map((drink) => {
                        return(
                            <Grid item xs={10} className={classes.menuItem}>
                                <Typography variant='h5' className={classes.itemName} gutterBottom>
                                    {drink.name}
                                </Typography>
                                <Typography variant='body1' className={classes.itemPrice}> ${drink.price} </Typography>
                                <Typography variant='body2'className={classes.itemDesc}>
                                    {drink.desc}
                                </Typography>
                            </Grid>
                        )
                        
                    })}

                    <Typography variant='h3'className={classes.menuCat}>Alcohol Free</Typography>
                    {noAlcohol.map((drink) => {
                        return(
                            <Grid item xs={10} className={classes.menuItem}>
                                <Typography variant='h5' className={classes.itemName} gutterBottom>
                                    {drink.name}
                                </Typography>
                                <Typography variant='body1' className={classes.itemPrice}> ${drink.price} </Typography>
                                <Typography variant='body2'className={classes.itemDesc}>
                                    {drink.desc}
                                </Typography>
                            </Grid>
                        )
                        
                    })}
                    
                    
                </Grid>
            </Grid>
            

           {/* {data && data.length>0 && data.map((item) => 
               <div>{item.name}</div>
           )} */}
        </>
    )
}

export default MenuPage
