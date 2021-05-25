
// data
import sliders from './data.json';

export default function Sliders() {
  console.log('sliders: ', sliders)
  return (
    <div className="sliders" style={{ height: 400 }}>
      <div className="sliders__container">
        <div className="sliders__prev">
          <button type="button" className="sliders__control sliders__control--prev"><i className="icon ic-go-left" /></button>
        </div>
        <div className="sliders__next">
          <button type="button" className="sliders__control sliders__control--next"><i className="icon ic-go-right" /></button>
        </div>
      </div>
    </div>
  )
}