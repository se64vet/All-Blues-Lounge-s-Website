import React, {useState, useEffect} from 'react';
import DesktopNavBar from './DesktopNavBar/DesktopNavBar';
import MobileNavbar from './MobileNavBar/MobileNavbar';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);
    const breakPoint = 900;

    const urlConfig = (urlStr)=>{
        if(urlStr.slice(0,1) !== "/"){
            return {pathname: urlStr}
        }else{
            return urlStr
        }
    }

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
        window.addEventListener("resize", setResponsive);

        return () => window.removeEventListener("resize", setResponsive); 
            
    }, [])
    
    const navItems = [
        {name: "Home",link: "/", isExternal: false},
        {name: "Menu", link: "/Menu", isExternal: false},
        {name: "Reserve a table", link: "https://bl-reservation.netlify.app/", isExternal: true},
        {name: "Contact", link: "/Contact", isExternal: false},
        {name: "Employee site", link: "https://bl-pos.netlify.app/", isExternal: true}
      ]
    return (
        <>
            {mobileView 
            ? <MobileNavbar navItems={navItems} leadText="Blues Lounge" configUrl = {urlConfig}/> 
            : <DesktopNavBar navItems={navItems} configUrl = {urlConfig}/>}
        </>
    )
}

export default Navbar
