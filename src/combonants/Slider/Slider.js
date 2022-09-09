import React from 'react';
import "./style/style.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {motion} from "framer-motion"


import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



function Slider({Datause,Type}) {
  const slider=useRef();
  const [maxWidthSlide,setmaxWidthSlide]=useState(false);
  let [route,setroute]=useState(0);


  useEffect(()=>{
    setmaxWidthSlide(slider.current.scrollWidth-slider.current.offsetWidth)
  })

  const Left_Section=()=>{
    if(route==0)return
    setroute(route=route-1)
    slider.current.style.cssText=`transform: translateX(-${route*180}px);transition: all .5s ease-in-out;`
  }

  const Right_section=()=>{
     if(maxWidthSlide!==false){if(maxWidthSlide<route*180)return}
     setroute(route=route+1)
    slider.current.style.cssText=`transform: translateX(-${route*180}px);transition: all .5s ease-in-out;`
  }



  //------------------------------------typing animation ----------------------------------------------//


  
  return (
    <>
    <motion.h1 className='header-slider'  initial={{x:-500}} animate={{x:0}} transition={{duration:5}}>{Type}</motion.h1>
        <div className='slider'>
              <div className='left' onClick={Left_Section}>
                <ArrowBackIosIcon sx={{fontSize:"2em"}}/>
              </div>
                    <div className='Slider-container'>
                              <div className='slider-section' ref={slider} >
                                  {Datause.map(({image,name},i)=>(
                                      <div className='icon-section' key={i}>
                                        <img src={image} alt="" />
                                          <p>{name}</p>
                                      </div>                
                                  ))}
                              </div>
                    </div>
              <div className='right' onClick={Right_section}>
                <ArrowForwardIosIcon sx={{fontSize:"2em"}}/>
              </div>
        </div>
    </>
  )
}

export default Slider
