import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const MobileNavbar = ({navItems, leadText, configUrl}) => {
    const classes = useStyles();
    const [leftDraw, setLeftDraw] = useState(false);

    const list = ()=>(
        <div className={classes.list} role="presentation" >
            <List>
                    <ListItem component={Link} to="/" >
                        <Typography variant='h6' color='primary'>{leadText.toUpperCase()}</Typography>
                    </ListItem>
                    {navItems.map((item, idx)=>(
                    <ListItem key={idx} className={classes.listItem} component={Link} to={configUrl(item.link)} target={item.isExternal ? "_blank" : "_self"}>
                        <ListItemText primary={item.name}/>
                    </ListItem>
                    ))}
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
                onClick={()=>setLeftDraw(true)} >
                <MenuIcon />
                </IconButton>
                <Drawer 
                anchor="left" 
                open = {leftDraw} 
                onClose={()=>setLeftDraw(false)}>
                {list()}
                </Drawer>
                </React.Fragment>
                
            </div>

        </Toolbar>
    </AppBar>
    )
}

export default MobileNavbar
