import React from 'react';
import clsx from 'clsx';

type IProps = {
  slide: {
    id: number,
    banner: string
  },
  currIndex: number;
  index: number;
}

function SliderItem({ slide, currIndex, index }: IProps) {
  console.log('currIndex: ', currIndex, index)


  return (
    <React.Fragment>
      <div 
        className={clsx(
          'sliders__item',
          index === currIndex && 'sliders__item--selected',
        )}>
        <figure>
          <img src={slide.banner} alt="Banner" />
        </figure>
      </div>
      {/* <div className="sliders__item sliders__item--previous">
        <figure>
          <img src="https://photo-zmp3.zadn.vn/banner/b/4/c/4/b4c492858069f9af2ea2e24395118b35.jpg" alt="Banner" />
        </figure>
      </div>
      <div className="sliders__item sliders__item--selected">
        <figure>
          <img src="https://photo-zmp3.zadn.vn/banner/c/b/c/c/cbcc8499d29e75f02fc824b29088950a.jpg" alt="Banner" />
        </figure>
      </div>
      <div className="sliders__item sliders__item--next">
        <figure>
          <img src="https://photo-zmp3.zadn.vn/banner/0/1/2/2/012284c470f1e692b6b89296a8aca79e.jpg" alt="Banner" />
        </figure>
      </div>
      <div className="sliders__item sliders__item--last">
        <figure>
          <img src="https://photo-zmp3.zadn.vn/banner/7/b/3/c/7b3cc839dd0ba23b59e0a21191d472df.jpg" alt="Banner" />
        </figure>
      </div>
      <div className="sliders__item sliders__item--first">
        <figure>
          <img src="https://photo-zmp3.zadn.vn/banner/3/b/a/8/3ba874571543d60125974c2672a1747c.jpg" alt="Banner" />
        </figure>
      </div> */}
    </React.Fragment>
  )
}

export default SliderItem
