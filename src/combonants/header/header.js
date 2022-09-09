import React, { useState } from 'react';
import "./style/style.scss";
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AppsIcon from '@mui/icons-material/Apps';
import {motion, useAnimation,AnimatePresence} from "framer-motion";
import NotesIcon from '@mui/icons-material/Notes';
import {Link} from "react-scroll"



function Header() {
  const [showNav,setShowNav]=useState({type:false,data:"show navbar"});
  const ShowItem=()=>{
    showNav.type==false?setShowNav({type:true,data:"hide navbar"}):setShowNav({type:false,data:"show navbar"})
  }




  return (
    <>
    <AnimatePresence>
        {showNav.type==true?
          <motion.ul className='Nav-bar-section'key="Navbar-Exit"  initial={{opacity: 0,}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity:0}}>
              <li> <Link   spy={true} smooth={true} duration={500} offset={-70}  to="home" ><HomeIcon/><span>home</span></Link> </li>
              <li> <Link  spy={true} smooth={true} duration={500} offset={-70} to="servises" ><MiscellaneousServicesIcon/> <span>services</span></Link> </li>
              <li><Link  spy={true} smooth={true} duration={500}  offset={-70} to="project" > <AppsIcon/> <span>Projects</span></Link>   </li>
              <li> <Link spy={true} smooth={true} duration={500}  offset={-70} to="contactMe"> <AlternateEmailIcon/> <span>contact</span></Link> </li>
          </motion.ul>
          :<></>}
          <div className='show-Nav' onClick={ShowItem}>
            <NotesIcon />
          </div>
      </AnimatePresence>
    </>
  )
}

export default Header
