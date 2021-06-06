import { useState } from 'react';

// data
import sliders from './data.json';

// components
import SliderItem from './SliderItem';

export default function Sliders() {
  const [currIndex, setCurrIndex] = useState(0);
  const slider = sliders[0];

  function handlePrev() {
    if(currIndex > 0) {
      setCurrIndex(prevState => prevState - 1);
    } else {
      setCurrIndex(sliders.length - 1)
    }
  }

  function handleNext() {
    if(currIndex < sliders.length - 1) {
      setCurrIndex(prevState => prevState + 1);
    } else {
      setCurrIndex(0)
    }
  }

  return (
    <div className="sliders">
      <div className="sliders__container">
        <div className="sliders__prev" onClick={handlePrev}>
          <button type="button" className="sliders__control sliders__control--prev"><i className="icon ic-go-left" /></button>
        </div>
        {sliders.map((slide, index) => (
          <SliderItem 
          key={slide.id} 
          index={index}
          currIndex={currIndex} 
          slide={slide} />
        ))}
        <div className="sliders__next" onClick={handleNext}>
          <button type="button" className="sliders__control sliders__control--next"><i className="icon ic-go-right" /></button>
        </div>
      </div>
    </div>
  )
}