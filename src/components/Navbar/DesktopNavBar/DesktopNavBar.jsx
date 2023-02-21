import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import useStyles from './styles';

const DesktopNavBar = ({navItems, configUrl}) => {
    const classes = useStyles();  

    return (
      <>
        <AppBar position="absolute" className = {classes.appBar} >
        <Toolbar>
            <div className={classes.grow}> 
                {navItems.map((item, idx)=>(
                <Button key={idx} 
                  className={classes.navEl} 
                  component={Link} 
                  to={configUrl(item.link)} 
                  target={item.isExternal ? "_blank" : "_self"}>

                    {item.name}
                  </Button>
                ))}
            </div>
        </Toolbar>
        </AppBar>
      </>
    )
}

export default DesktopNavBar
