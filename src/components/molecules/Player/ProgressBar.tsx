import React, { useState, useRef, useEffect, useCallback } from 'react';

function ProgressBar() {
  // States
  const [percent, setPercent] = useState(50);
  // Refs
  const progressRef = useRef<HTMLDivElement>(null)
  const isBusyRef = useRef(false)

  function handleVolume(event: { type: string; nativeEvent: { offsetX: number; }; }) {
    if(!progressRef.current) return;
    if(event.type === 'click') {
      const newValue = (event.nativeEvent.offsetX /  progressRef.current.offsetWidth) * 100;
      setPercent(newValue)
    }
    if(event.type === 'mousedown') {
      isBusyRef.current = true
    }
  }

  const hanldeMouseMove = useCallback((event: any) => {
    if(!progressRef.current) return;
    if(isBusyRef.current) {
      const offsetWidth = progressRef.current.offsetWidth;
      let cal = event.clientX - progressRef.current.offsetLeft;
      if(cal < 0) cal = 0;
      if(cal > offsetWidth) cal = offsetWidth;

      const newValue = (cal / offsetWidth) * 100;
      setPercent(newValue)
    }
  },[])

  function hanldeMouseUp() {
    isBusyRef.current = false
  }

  useEffect(() => {
    if(progressRef.current) {
      document.addEventListener('mousemove', hanldeMouseMove)
      document.addEventListener('mouseup', hanldeMouseUp)
    }

    return () => {
      progressRef.current && progressRef.current.removeEventListener('mousemove', hanldeMouseMove)
      progressRef.current && progressRef.current.removeEventListener('mouseup', hanldeMouseUp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={progressRef}
      className="progressBar" 
      onClick={handleVolume}
      onMouseDown={handleVolume}
      >
      <div className="progressBar__bg">
        <div className="progressBar__dot" style={{ width: `${Math.round(percent)}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
