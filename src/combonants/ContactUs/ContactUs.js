import React, { useEffect } from 'react';
import styled from 'styled-components';
import {motion, useAnimation} from "framer-motion";
import "./style/style.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';


function ContactUs() {
    const [Error,setError]=useState(false);
    const [massage,setMassage]=useState(false)
    const GetData=(e)=>{
        e.preventDefault();
        let firstname=e.target.firstname.value;
        let lastname=e.target.lastname.value;
        let email =e.target.mail.value;
        let subject=e.target.subject.value;
        if(firstname==""||lastname==""||email==""||subject==""){
            setError(true)
            setMassage(false)
        }
        else{
            setError(false)
            setMassage(true)
            axios.post(`${process.env.REACT_APP_BACKEND}SendGrid`,{firstname:firstname,lastname:lastname,email:email,subject:subject})
        }
    }


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
    <Stylish>
    <div className='containus-container' id="contactMe">
        <motion.h1 className='expreienice-header' initial={{scale:1.05}} animate={{scale:1}} transition={{duration:1,yoyo:Infinity}}>
          Contact Me
        </motion.h1>
        <motion.div id="contact-container" ref={ref} animate={animatetion}>
            <form id="contact-form" action="action_page.php" onSubmit={GetData}>
                <div id="name-container">
                    <input id="first-name-input" type="text" name="firstname" placeholder="First name" ></input>
                    <input id="last-name-input" type="text" name="lastname" placeholder="Last name"></input>
                </div>
                <input id="mail-input" type="email" name="mail" placeholder="Email" required/>
                <textarea id="subject-input" name="subject" placeholder="Type your message here"></textarea>
                <input id="submit-button" type="submit" value="Send Massage To Me"/>
                {Error==true?<motion.p style={{textTransform:"capitalize",color:"red",padding:"10px",fontWeight:"cold",fontSize:"1.3em"}}  initial={{y:-100}} animate={{y:0}} transition={{duration:.5}}>All Input Are Required</motion.p>:<></>}
                {massage==true?<motion.p style={{textTransform:"capitalize",color:"blue",padding:"10px",fontWeight:"cold",fontSize:"1.3em"}}  initial={{y:-100}} animate={{y:0}} transition={{duration:.5}}>The Massage Has Been send</motion.p>:<></>}
            </form>
            <ul id="traditional-contact">
                <li>Contact me through:</li>
                <li>{process.env.REACT_APP_EMAIL}</li>
                <li>Find me on</li>
                <li className='icon-section'>
                    <a href={process.env.REACT_APP_GITHUB} style={{color:"white"}}> <GitHubIcon/></a>
                    <a href="https://outlook.live.com/owa/0/?state=1&redirectTo=aHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8" style={{color:"white"}}><AlternateEmailIcon/></a>
                    <a href={process.env.REACT_APP_LINKEDIN} style={{color:"white"}}><LinkedInIcon/></a>
                </li>
            </ul>
        </motion.div>
      
    </div>
    </Stylish>
  )
}

export default ContactUs




const Stylish=styled.div`







`