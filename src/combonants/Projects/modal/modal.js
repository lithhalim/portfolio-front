import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ReactPlayer from 'react-player';



export default function Modal_Project({tutorial}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button onClick={handleOpen}><a  style={{color:"rgb(255, 255, 255)"}}> <VideoLibraryIcon/></a></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <ReactPlayer controls url={tutorial}/>
        </Box>
      </Modal>
    </div>
  );
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  