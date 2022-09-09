import React from 'react';
import "./style/style.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Sidebar_Contact() {
  return (
    <div className='Sidebar-contaier'>
        <ul className='icon-section'>
            <li>
                <a href={process.env.REACT_APP_GITHUB}><GitHubIcon/></a>
            </li>
            <li>
                <a href={process.env.REACT_APP_EMAIL}><AlternateEmailIcon/></a>
            </li>
            <li>
                <a href={process.env.REACT_APP_FACEBOOK}><FacebookIcon/></a>
            </li>
            <li>
                <a href={process.env.REACT_APP_LINKEDIN}> <LinkedInIcon/></a>
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar_Contact
