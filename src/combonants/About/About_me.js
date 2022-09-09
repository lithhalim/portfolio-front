import React from 'react';
import "./style/style.scss";
import {motion} from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Button from '@mui/material/Button';
import {Link} from "react-scroll"

import aboutme from "../../assest/aboutme/images-removebg-preview.png";


function About_me() {
  return (
    <div className='Aboutme-container'>
        <motion.h1 className='expreienice-header' style={{marginBottom:"50px"}} initial={{scale:1.05}} animate={{scale:1}} transition={{duration:1,yoyo:Infinity}}>
          About Me
        </motion.h1>

        <div className='about-me-holder'>
            <div className='about-left' >
                <img src={aboutme} alt=""  />
            </div>
            <div className='about-right'>
                    <ul>
                        <li>
                            <p><AlternateEmailIcon/></p> <h2>Experience</h2> <p>1 Year Self Study</p>
                        </li>
                        <li>
                            <p><MiscellaneousServicesIcon/></p> <h2>Projects</h2> <p>8 Mixed Project</p>
                        </li>
                        <li>
                            <p><HomeIcon/></p> <h2>Introduction</h2> <p>1 Year Self Study</p>
                        </li>
                    </ul>
                    <p>the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations."the pictures are clear and relate well to the text"Similar:wordswordingsubject mattercontentcontentsbodymain bo</p>
                    <div className='button-section'>
                            <Button  variant="contained" style={{color:"rgb(255, 255, 255)",border:"2px solid rgb(255, 255, 255)" ,backgroundColor:"#361500"}}> <Link spy={true} smooth={true} duration={500}  offset={-70} to="contactMe" style={{display:"flex",alignItems:"center"}}><AlternateEmailIcon/> <span style={{marginLeft:"10px"}}>Contact With Me</span></Link> </Button>
                    </div>
            </div>

        </div>

      
    </div>
  )
}

export default About_me
