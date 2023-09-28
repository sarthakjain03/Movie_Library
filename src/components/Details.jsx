import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from '../config';
import { YouTube } from '@mui/icons-material';
import Carousel from './Carousel';

const style = {
  zIndex: 100000,
  width: "91%",
  height: "92%",
  backgroundColor: "#39445a",
  border: "1px solid #282c34",
  borderRadius: 10,
  color: "white",
  padding: 7,
};

export default function Details({children, media_type, id}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState()
  const [video, setVideo] = useState()

  const mobile = useMediaQuery('(max-width:767px)')

  const fetchData = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)

    setContent(data)
  }

  const fetchVideo = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)

    setVideo(data.results[0]?.key)
  }

  useEffect(() => {
    fetchData()
    fetchVideo()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className='m-6 p-2 w-[200px] bg-slate-700 rounded-lg relative cursor-pointer border-2 border-slate-700 hover:border-yellow-300' onClick={handleOpen}>
        {children}
      </div>
      <Modal
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {content && (
            <div style={style}>
              <div className='flex flex-col md:flex-row md:justify-around md:py-3 justify-between h-full w-full overflow-y-scroll no-scrollbar'>

                <img src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable} alt={content.title || content.name} className={`object-contain w-[38%] rounded-xl ${mobile ? 'hidden' : 'flex'}`} />
                <img src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape} alt={content.title || content.name} className={`object-contain rounded-lg ${mobile ? '' : 'hidden'}`} />

                <div className='md:p-0 md:w-[58%] p-2 flex flex-col justify-evenly font-sans font-light'>
                  <span className='md:text-[3.5vw] h-[12%] text-[5vw] flex justify-center items-center'>
                    {content.name || content.title} ({(content.first_air_date || content.release_date || "-----").substring(0, 4)})
                  </span>

                  {content.tagline && (
                    <i className='pb-2 self-center'>{content.tagline}</i>
                  )}

                  <div className='p-3 rounded-xl bg-gray-600 shadow-lg mb-2'>
                    <span className='text-[15px] flex text-justify'>
                      {content.overview}
                    </span>
                  </div>

                  <div>
                    <Carousel media_type={media_type} id={id} />
                  </div>

                  <Button
                    variant='contained'
                    startIcon={<YouTube />}
                    color='primary'
                    target='__blank'
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch Trailer / Preview
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}