import React, { useEffect } from 'react';
import {motion,useAnimation} from "framer-motion";
import "./style/style.scss"
import Card_Projects from './card/card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useInView } from 'react-intersection-observer';


//-------------------------------------------image section --------------------------------------------//
import eccomersImage from "../../assest/ProjectImage/eccomers1.png";
import socialimage from "../../assest/ProjectImage/facebook.png";
import storeimage from "../../assest/ProjectImage/store-image.png";
import todoimage from "../../assest/ProjectImage/todo-list.png";
import fotballImage from "../../assest/ProjectImage/imageFootball.png";
import syarahimage from "../../assest/ProjectImage/syaraheccomers.png";
import sweetproject from "../../assest/ProjectImage/sweeteccomers.png";
import FoodRest from "../../assest/ProjectImage/food-front.png";
import PosImage from "../../assest/ProjectImage/Pos sysem Image.png"
//-------------------------------------------vedio section ---------------------------------------------//
import syarahvedio from "../../assest/vedio/syarah.mp4";
import sweetvedio from "../../assest/vedio/sweet.mp4";
import footballvedio from "../../assest/vedio/football.mp4";
import eccomersVedio from "../../assest/vedio/eccomers.mp4";
import facebookvedio from "../../assest/vedio/facebook.mp4";
import othervedio from "../../assest/vedio/videoplayback.mp4";
import PosVedio from "../../assest/vedio/pos System.mp4";
import Eccomers_Active from "../../assest/vedio/Eccomers_Active.mp4";



import { useState } from 'react';

let dataUse=[
{github:"https://github.com/lithhalim/pos-front",netlify:"https://possystem.netlify.app/",tutorial:PosVedio,image:PosImage,type:"bigProject"},
{github:"https://github.com/lithhalim/food-frontend",netlify:"https://food-front.netlify.app/",tutorial:sweetvedio,image:FoodRest,type:"bigProject"},
{github:"https://github.com/lithhalim/sweet-frontEnd",netlify:"https://sweet-eccomers.netlify.app/",tutorial:sweetvedio,image:sweetproject,type:"bigProject"},
{github:"https://github.com/lithhalim/syarah-frontend",netlify:"https://syarah-eccomers.netlify.app/",tutorial:syarahvedio,image:syarahimage,type:"bigProject"},
{github:"https://github.com/lithhalim/face-front",netlify:"https://634be91b47ed83696ddf09fc--brilliant-fairy-2313ac.netlify.app/",tutorial:facebookvedio,image:socialimage,type:"bigProject"},
{github:"https://github.com/lithhalim/eccomers-front",netlify:"https://eccomers-application-lith.netlify.app/",tutorial:eccomersVedio,image:eccomersImage,type:"bigProject"},
{github:"https://github.com/lithhalim/Football_frontEnd",netlify:"https://app.netlify.com/sites/footballwebsite11/overview",tutorial:footballvedio,image:fotballImage,type:"bigProject"},
{github:"https://github.com/lithhalim/store-frontend",netlify:"https://cozy-fenglisu-af2346.netlify.app/",tutorial:othervedio,image:storeimage,type:"smallProject"},
{github:"https://github.com/lithhalim/Todo-List",netlify:"https://6321b90a50be9b0aec67c4bd--warm-sprinkles-1d72ae.netlify.app/",tutorial:othervedio,image:todoimage,type:"smallProject"},
]






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
