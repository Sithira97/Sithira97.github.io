import React, { useState, useRef, useEffect } from 'react';
import './rangeInput.css'

const BrightnessController = () => {
  const controllerRef = useRef(null)
  const [brightness, setBrightness] = useState(0.51 / 0.7);
  const [briSlider, setBriSlider] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const controllerWidth = controllerRef.current ? controllerRef.current.offsetWidth : 0;
    let sliderwidth;
    sliderwidth = (controllerWidth * brightness) + (16 * (1 - brightness))

    setBriSlider(sliderwidth);
    setTrackWidth(controllerWidth);
  }, [controllerRef, brightness]);

  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    let sliderwidth;
    setBrightness(newBrightness);
    document.body.style.filter = "brightness(" + ((newBrightness * 0.7) + 0.5) + ")";

    const controllerWidth = controllerRef.current ? controllerRef.current.offsetWidth : 0;

    sliderwidth = (controllerWidth * newBrightness) + (16 * (1 - newBrightness))

    setBriSlider(sliderwidth);
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
      <label htmlFor="brightness" className="line-height-1 text-gray-700">
        Display
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex grow items-center pt-1">
          <input
            id="brightness"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={brightness}
            onChange={handleBrightnessChange}
            className=""
            ref={controllerRef}
          />
          <span style={{ width: `${briSlider}px` }} className='slider'></span>
          <span style={{ width: `${trackWidth}px` }} className='track'></span>
        </div>
        <div className='mt-1 size-5 rounded-full justify-center items-center text-center bg-[#6e6e6e34]'>
          
        </div>
      </div>
    </div>
  );
};

export default BrightnessController;