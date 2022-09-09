import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import Modal_Project from '../modal/modal';
import {motion,AnimatePresence} from "framer-motion"


function Card_Projects({AllData,keysection}) {
  const {github,image,netlify,tutorial}=AllData;

  return (
    <AnimatePresence>
      <motion.div key={keysection} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} exit={{ x: "-100vw" }}>
          <Card sx={{ maxWidth: 220 }} className="card-setting">
          <CardMedia
              component="img"
              height="180"
              image={image}
              alt="green iguana"
          />
          <CardActions >
              <Button variant="text" style={{ fontWeight: "bold"}}> <a href={github} style={{color:"rgb(255, 255, 255)"}}> <GitHubIcon/></a></Button>
              <Button variant="text" style={{fontWeight: "bold"}}><a href={netlify} style={{color:"rgb(255, 255, 255)" ,}}>  <MotionPhotosAutoIcon/></a></Button>
              <Button variant="text" style={{ fontWeight: "bold"}}>  <Modal_Project tutorial={tutorial}/> </Button>
          </CardActions>
          </Card>      
      </motion.div>
    </AnimatePresence>
  )
}

export default Card_Projects
