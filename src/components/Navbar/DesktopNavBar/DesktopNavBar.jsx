import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const DesktopNavBar = ({totalItems}) => {
    const classes = useStyles();
    // const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  

    return (
      <>
        <AppBar position="absolute" className = {classes.appBar} >
        <Toolbar>
            <div className={classes.grow}> 
                <Button className={classes.navEl} component={Link} to="/">Home</Button>
                <Button className={classes.navEl} component={Link} to="/Menu">Our Menu</Button>
                <Button className={classes.navEl} component={Link} to="/Contact">Contact</Button>
            </div>
        </Toolbar>
        </AppBar>
      </>
    )
}

export default DesktopNavBar
