import React, {useState, useEffect} from 'react';
import DesktopNavBar from './DesktopNavBar/DesktopNavBar';
import MobileNavbar from './MobileNavBar/MobileNavbar';

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const [mobileView, setMobileView] = useState(false);
    const breakPoint = 900;

    useEffect(() => {
        const setResponsive = ()=>{
            if(window.innerWidth < breakPoint){
                setMobileView(true)
            }
            else{
                setMobileView(false)
            }      
        };

        setResponsive();
        window.addEventListener("resize", ()=> setResponsive());

        return () => {
            window.removeEventListener("resize", ()=> setResponsive());
        }
    }, [])
    
    return (
        <>
            {mobileView ? <MobileNavbar totalItems = {totalItems}/> : <DesktopNavBar totalItems = {totalItems}/>}
        </>
    )
}

export default Navbar
