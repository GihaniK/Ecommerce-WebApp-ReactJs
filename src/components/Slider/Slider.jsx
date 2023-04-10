import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";

const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [

        "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 :  (prev) => prev + 1);
    };

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Slider