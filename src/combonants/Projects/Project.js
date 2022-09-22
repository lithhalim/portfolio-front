import React, { useEffect } from 'react';
import {motion,useAnimation} from "framer-motion";
import "./style/style.scss"
import Card_Projects from './card/card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useInView } from 'react-intersection-observer';


//-------------------------------------------image section --------------------------------------------//
import eccomersImage from "../../assest/ProjectImage/eccomers1.png";
import socialimage from "../../assest/ProjectImage/social-image.png";
import storeimage from "../../assest/ProjectImage/store-image.png";
import todoimage from "../../assest/ProjectImage/todo-list.png";
import fotballImage from "../../assest/ProjectImage/imageFootball.png"
//-------------------------------------------vedio section ---------------------------------------------//
import vedio1 from "../../assest/vedio/videoplayback.mp4";
import EcommersVedio from "../../assest/vedio/eccomers.mp4";
import socialvedio from "../../assest/vedio/social-vedio.mp4";
import football from "../../assest/vedio/football.mp4"

import { useState } from 'react';

let dataUse=[{github:"https://github.com/lithhalim/eccomers-front",netlify:"https://eccomers-application-lith.netlify.app/",tutorial:EcommersVedio,image:eccomersImage,type:"bigProject"},
{github:"https://github.com/lithhalim/face-frontEnd-project",netlify:"https://chate-application-lith.netlify.app/",tutorial:socialvedio,image:socialimage,type:"bigProject"},
{github:"https://github.com/lithhalim/store-frontend",netlify:"https://cozy-fenglisu-af2346.netlify.app/",tutorial:vedio1,image:storeimage,type:"smallProject"},
{github:"https://github.com/lithhalim/Todo-List",netlify:"https://6321b90a50be9b0aec67c4bd--warm-sprinkles-1d72ae.netlify.app/",tutorial:vedio1,image:todoimage,type:"smallProject"},
{github:"https://github.com/lithhalim/Football_frontEnd",netlify:"https://app.netlify.com/sites/footballwebsite11/overview",tutorial:football,image:fotballImage,type:"bigProject"}]






function Project() {
  const [alignment, setAlignment] = React.useState('All Project');
  const [DataHave,setDataHave]=useState(dataUse);

  //--------------------------------------view element section -----------------------------------------//
  const { ref, inView, entry } = useInView({
  });
  const animatetion=useAnimation();
  
  useEffect(()=>{
    if(inView){
      animatetion.start({x:0,transition:{type:'spring',duration:3,bounce:.3}})
    }
    if(!inView){
      animatetion.start({x:'-70vw'})
    }
  },[inView])



  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if(newAlignment==="bigProject"||newAlignment==="smallProject"){
      let newData=(dataUse.filter((data)=>(data.type==newAlignment)))
      setDataHave(newData)
    }else{
      setDataHave(dataUse)
    }
  };



  return (
    

        <motion.div className='projects-container' id="project"      >
            <motion.h1 className='expreienice-header' initial={{scale:1.05}} animate={{scale:1}} transition={{duration:1,yoyo:Infinity}}>
              My Project 
            </motion.h1>
                <div className='container-allTogel'>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  className='Toggel-container'
                >
                  <ToggleButton value="All Project" className='toggel-button'>All Project</ToggleButton>
                  <ToggleButton value="bigProject" className='toggel-button'>Big Project</ToggleButton>
                  <ToggleButton value="smallProject" className='toggel-button'>Small Project</ToggleButton>
                </ToggleButtonGroup>
                </div>
            <motion.div className='project-Inner'  ref={ref}   animate={animatetion}  >
            {DataHave.map((a,i)=>(<Card_Projects key={i} AllData={a} keysection={i}/>))}
            </motion.div>
        </motion.div>
          

  )
}

export default Project
