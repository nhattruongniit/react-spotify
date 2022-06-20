import { useState, useCallback } from "react";

// data
import sliders from "./data.json";

// components
import SliderItem from "./SliderItem";

export default function Sliders() {
  const [currIndex, setCurrIndex] = useState(Math.floor(Math.random() * 6));

  console.log("no squash commit");

  const handlePrevSlide = useCallback(() => {
    setCurrIndex(
      (prevCurrIndex: number) =>
        (prevCurrIndex - 1 + sliders.length) % sliders.length
    );
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrIndex(
      (prevCurrIndex: number) => (prevCurrIndex + 1) % sliders.length
    );
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(handleNextSlide, 3000)
  //   return () => clearTimeout(timeout)
  // })

  return (
    <div className="sliders">
      <div className="sliders__container">
        <div className="sliders__prev" onClick={handlePrevSlide}>
          <button
            type="button"
            className="sliders__control sliders__control--prev"
          >
            <i className="icon ic-go-left" />
          </button>
        </div>
        {sliders.map((slide, index) => (
          <SliderItem
            key={slide.id}
            index={index}
            slide={slide}
            currIndex={currIndex}
            total={sliders.length}
          />
        ))}
        <div className="sliders__next" onClick={handleNextSlide}>
          <button
            type="button"
            className="sliders__control sliders__control--next"
          >
            <i className="icon ic-go-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
