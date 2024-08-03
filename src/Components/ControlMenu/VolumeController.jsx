import React, { useState, useRef, useEffect } from 'react';
import './rangeInput.css'

const VolumeController = ({ audioRef, volume,  setVolume}) => {
  const sliderRef = useRef(null);
  const controllerRef = useRef(null)
  const [volSlider, setVolSlider] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const controllerWidth = controllerRef.current ? controllerRef.current.offsetWidth : 0;
    let sliderwidth;
    sliderwidth = (controllerWidth * volume) + (16 * (1-volume))

    setVolSlider(sliderwidth);
    setTrackWidth(controllerWidth);
  }, [controllerRef, volume]);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    let sliderwidth;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;

    const controllerWidth = controllerRef.current ? controllerRef.current.offsetWidth : 0;
    
      sliderwidth = (controllerWidth * newVolume) + (16 * (1-newVolume))

    setVolSlider(sliderwidth);
  };

  useEffect(() => {
    const updateTrackWidth = () => {
      const controllerWidth = controllerRef.current ? controllerRef.current.offsetWidth : 0;
      setTrackWidth(controllerWidth);
    };

    window.addEventListener('resize', updateTrackWidth);
    updateTrackWidth();

    return () => {
      window.removeEventListener('resize', updateTrackWidth);
    };
  }, []);

  return (
    <div className="py-2 px-4 my-1">
      <label htmlFor="volume" className="mr-2 text-gray-700">
        Sound
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex grow items-center pt-1">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className=""
            ref={controllerRef}
          />
          <span style={{ width: `${volSlider}px` }} ref={sliderRef} className='slider'></span>
          <span style={{ width: `${trackWidth}px` }} className='track'></span>
        </div>
        <div className='mt-1 size-5 rounded-full justify-center items-center text-center bg-[#6e6e6e34]'>
          
        </div>
      </div>
    </div>
  );
};

export default VolumeController;