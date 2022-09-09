import React, { useEffect } from 'react';
import "./style/style.scss";
import Slider from '../Slider/Slider';
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion";


//---------------------------------------Front End Data ------------------------------------------------//
import bootstreb from "../../assest/frontEnd/bootstrab.png";
import css from "../../assest/frontEnd/css.png";
import html from "../../assest/frontEnd/html.png";
import js from "../../assest/frontEnd/js.png";
import materialui from "../../assest/frontEnd/materialui.png";
import reactjs from "../../assest/frontEnd/react js.png"
import scss from "../../assest/frontEnd/scss.png";
//-----------------------------------------BackEnd App --------------------------------------------------//
import mongodb from "../../assest/backend/mongodb.png";
import mysql from "../../assest/backend/mysql.png";
import nodejs from "../../assest/backend/nodejs.png";
import postgress from "../../assest/backend/postgress.png";
import git from "../../assest/backend/git.png";
import heroku from "../../assest/backend/heroku.jpg";
import netlify from "../../assest/backend/netlify.png"

const FrontEnd_data=[{image:bootstreb,name:"bootstrap"},{image:css,name:"css"},{image:html,name:"html"},{image:materialui,name:"Material ui"},{image:js,name:"js"},{image:reactjs,name:"reactjs"},{image:scss,name:"scss"}]

const BackEnd_data=[{image:mongodb,name:"mongodb"},{image:mysql,name:"mysql"},{image:nodejs,name:"nodejs"},{image:postgress,name:"postgress"},{image:git,name:"git"},{image:heroku,name:"heroku"},{image:netlify,name:"netlify"}]





function Experience() {

  //--------------------------------------view element section -----------------------------------------//
const { ref, inView } = useInView({});
const animatetion=useAnimation();

useEffect(()=>{
if(inView){
    animatetion.start({x:0,transition:{type:'spring',duration:3,bounce:.3}})
}
if(!inView){
    animatetion.start({x:'-70vw'})
}
},[inView])

  return (
    <motion.div className='expreience-container' id="servises" ref={ref} animate={animatetion}>
        <motion.h1 className='expreienice-header' initial={{scale:1.05}} animate={{scale:1}} transition={{duration:1,yoyo:Infinity}}>
          experience programming
        </motion.h1>
        <Slider Datause={FrontEnd_data} Type="Front End language "/>
        <Slider Datause={BackEnd_data} Type="Mixed Programing"/>
    </motion.div>
  )
}

export default Experience
