import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TabsContext } from '@mui/base';
import  {AiFillPlayCircle} from 'react-icons/ai';
import YouTubeIframe  from 'react-youtube-iframe'
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const opts={
    height: '960',
    width: '500'
  };
function Banner() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
  return (
    <div className='flex bg-[#f7f5f5] pt-32'>
        <div className=' w-1/2 mt-32 '>
            <h3 className='font-Arvo text-[32px] text-left mx-20'>Small Town Charm</h3>
            <p className='text-left font-extralight mb-[10px] mx-20'>Aenean hendrerit maximus aliquet. Pellentesque interdum odio dui, vitae <br /> 
            eleifend nibh aliquet ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc diam lorem, condimentum non justo quis, suscipit mattis felis.

            Vivamus cursus tortor in maximus lacinia. Etiam rhoncus finibus lorem sit amet ullamcorper.</p>

        </div>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box   className=" pt-72  space-y-32 mt-32 mx-32   ">
          <YouTubeIframe opts={opts}   className="" videoId="https://www.youtube.com/watch?v=4jgfMx-Giok"/>
        </Box>
      </Modal>
 
           
        <div className='relative'>
            <img 

            src='https://cdn.discordapp.com/attachments/800718490750418967/1053276474431508530/pexels-pixabay-280221.jpg'
            
            className='max-w-xl z-10 pb-32 hover:animate-pulse '
            alt='video'
            
            />
            <AiFillPlayCircle
                onClick={handleOpen}
                className=' absolute top-[35%] left-[45%] z-20 h-20 w-20 '
            
             />

        </div>
             

    </div>
  )
}

export default Banner