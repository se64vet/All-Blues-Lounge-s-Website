import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
const Event = () => {
    const classes = useStyles()
  return (
    <>
       <Grid container justifyContent='center' alignItems='center' spacing={10} direction="column" >
            <Grid item xs={12}>
                <img className={classes.img} src={process.env.PUBLIC_URL + `/assets/carousel/2.jpg`} alt="divider" />
            </Grid>
        </Grid>
        <Grid container justifyContent='center' alignItems='center' spacing={10} direction="column">
                
            <Grid className={classes.contentWrapper} container item xs={11} md={8} lg={5} justifyContent='center' alignItems='center' direction="column">
                <Typography variant='body' align='center' >We're not having any event at the moment.</Typography>
            </Grid>
        </Grid>

    </>
  )
}

export default Event