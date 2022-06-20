import React from "react";
import clsx from "clsx";

type IProps = {
  slide: {
    id: number;
    banner: string;
  };
  currIndex: number;
  index: number;
  total: number;
};

function SliderItem({ slide, currIndex, index, total }: IProps) {
  let next = currIndex + 1;
  let prev = currIndex - 1;

  if (currIndex === total - 1) {
    next = 0;
  } else if (currIndex === 0) {
    prev = 4;
  }

  console.log("no squash commit");

  return (
    <React.Fragment>
      <div
        className={clsx(
          "sliders__item",
          index === prev && "sliders__item--previous",
          index === currIndex && "sliders__item--selected",
          index === next && "sliders__item--next"
        )}
      >
        <figure>
          <img src={slide.banner} alt="Banner" />
        </figure>
      </div>
    </React.Fragment>
  );
}

export default SliderItem;
