import React from 'react';
import { useEffect } from 'react';
import "./style/style.scss";
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Experience from '../experience/experience';
import Project from '../Projects/Project';
import ContactUs from '../ContactUs/ContactUs';
import {Link} from "react-scroll";
import {motion} from "framer-motion"
import About_me from '../About/About_me';

import personalImage from "../../assest/header-image.png";


let i=0
function Home_page() {
  let text="My Name Is LITH HALIM  i`m Full Stack Developer."

  useEffect(()=>{
    setInterval(()=>{
      if(i<text.length){
        document.querySelector("#element").innerHTML+=text.charAt(i);
        i++
      }else{
        i=0
        document.querySelector("#element").innerHTML=""
      }
    },300)
  })
  



  return (
    <>
    <div className='Home-section-container' id="home">
      <div className='home-leftSide'>
        <h1>Welcome To My protfolio</h1>
        <h1 id='element'></h1>
        <div className="icon-holder">
          <a href="cv.pdf" download="cv.pdf">
            <Button variant="outlined" style={{color:"rgb(255, 255, 255)",border:"2px solid rgb(255, 255, 255) "}}>download cv <CloudDownloadIcon style={{marginLeft:"10px"}}/></Button>
          </a>
          <Button variant="outlined" style={{border:"2px solid rgb(255, 255, 255) "}}> <Link spy={true} smooth={true} duration={500}  offset={-70} to="project" style={{display:"flex",alignItems:"center",color:"rgb(255, 255, 255)",}}>  see my work <AspectRatioIcon style={{marginLeft:"10px"}}/></Link></Button>
        </div>
      </div>
      <div className='home-right-side'>
        <motion.img src={personalImage} alt="" style={{width:"80%",height:"350px"}}  initial={{opacity:0 ,scale:.2 }} animate={{opacity:1,scale:1 }}  transition={{duration:3 ,type:"tween"}}/>
      </div>
    </div>
    <About_me/>
    <Experience/>
    <Project/>
    <ContactUs/>


    
    </>
  )
}

export default Home_page
