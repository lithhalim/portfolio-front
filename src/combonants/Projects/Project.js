import React, { useEffect } from 'react';
import {motion,useAnimation} from "framer-motion";
import "./style/style.scss"
import Card_Projects from './card/card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useInView } from 'react-intersection-observer';


//-------------------------------------------image section --------------------------------------------//
import image1 from "../../assest/frontEnd/css.png";
import image2 from "../../assest/frontEnd/css.png";
import image3 from "../../assest/frontEnd/html.png";
import image4 from "../../assest/frontEnd/js.png";
import image5 from "../../assest/frontEnd/scss.png";

//-------------------------------------------vedio section ---------------------------------------------//
import vedio1 from "../../assest/vedio/videoplayback.mp4";
import { useState } from 'react';

let dataUse=[{github:"https://github.com/lithhalim/store-frontend",netlify:"",tutorial:vedio1,image:image1,type:"bigProject"},{github:"",netlify:"",tutorial:vedio1,image:image2,type:"bigProject"},{github:"",netlify:"",tutorial:vedio1,image:image3,type:"smallProject"},{github:"",netlify:"",tutorial:vedio1,image:image4,type:"smallProject"},{github:"",netlify:"",tutorial:vedio1,image:image5,type:"bigProject"}]






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
