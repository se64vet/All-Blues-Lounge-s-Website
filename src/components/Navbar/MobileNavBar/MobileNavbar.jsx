import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, List, ListItem, ListItemText, Typography, Drawer } from '@material-ui/core';
import { ShoppingCart, Close } from '@material-ui/icons';
import clsx from 'clsx';
// import logo from '../../../../public/assets/logo1200.png'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const MobileNavbar = ({totalItems}) => {
    const classes = useStyles();
    // const location = useLocation();
    const [leftDraw, setLeftDraw] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
        setLeftDraw(open)
    }
    const list = ()=>(
        <div className={classes.list} role="presentattion" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                    <ListItem component={Link} to="/" >
                        <Typography variant='h6' color='primary' >ALL BLUES</Typography>
                    </ListItem>
                    <ListItem className={classes.listItem} component={Link} to="/">
                        <ListItemText primary='Home'/>
                    </ListItem>
                    <ListItem className={classes.listItem} component={Link} to="/Menu">
                        <ListItemText primary='Menu'/>
                    </ListItem>
                    <ListItem className={classes.listItem} component={Link} to="/Contact">
                        <ListItemText primary='Contact'/>
                    </ListItem>
                </List>
        </div>
    )
    return (
        <AppBar position="fixed" className = {classes.appBar} color="secondary">
        <Toolbar >
            <div className={classes.grow}>
                <React.Fragment key='left'> 
                <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" aria-label="menu"
                onClick={toggleDrawer(true)} >
                    <MenuIcon />
                </IconButton>
                <Drawer 
                anchor="top" 
                open = {leftDraw} 
                onClose={toggleDrawer( false)}>
                {list()}
                
                </Drawer>

                </React.Fragment>
                
            </div>

            

            {/* {location.pathname === "/" && (
            <div className={classes.button}> 
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>
            )} */}
        </Toolbar>
    </AppBar>
    )
}

export default MobileNavbar
