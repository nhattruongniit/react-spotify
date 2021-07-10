import { useState } from 'react'
import ProgressBar from './ProgressBar'

import clsx from 'clsx'

const Player = () => {
  const [isPlay, seIsPlay] = useState(false);
  
  function togglePlay() {
    seIsPlay(prevState => !prevState)
  }

  return (
    <div className="bg-player-bg fixed w-full bottom-0 left-0 h-24 px-10 flex justify-between items-center">
      <div className="w-1/5 flex items-center">
        <div 
          className={clsx(
            'w-16 h-16 relative',
            isPlay && 'music_played'
          )}
        >
          <div className="thumbnail rounded-full overflow-hidden border-2 border-solid">
            <img src="assets/images/icon-album.jpeg" alt="Album" />
          </div>
          <svg viewBox="0 0 512 512" className="musicNote note-1">
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            />
          </svg>
          <svg viewBox="0 0 384 512" className="musicNote note-2">
            <path
              d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"
            />
          </svg>
          <svg viewBox="0 0 512 512" className="musicNote note-3">
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            />
          </svg>
          <svg viewBox="0 0 512 512" className="musicNote note-4">
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            />
          </svg>
        </div>
        <div className="w-44 ml-3 overflow-hidden whitespace-nowrap overflow-ellipsis">
          If You Really Love Me (How Will I Know)
        </div>
      </div>
      <div className="w-2/5 flex flex-col">
        <div className="flex items-center justify-items-center mx-auto">
          <button type="button">
            <i className="icon icon--xsmall flex ic-shuffle mr-3" />
          </button>
          <button type="button">
            <i className="icon icon--xsmall flex ic-pre mr-3" />
          </button>
          <button type="button" onClick={togglePlay}>
            <i 
              className={clsx(
                "icon icon--4xlarge flex mr-3",
                isPlay ? 'ic-pause-circle-outline' : 'ic-play-circle-outline'
              )}
            />
          </button>
          <button type="button">
            <i className="icon icon--xsmall flex ic-next mr-3" />
          </button>
          <button type="button">
            <i className="icon icon--xsmall flex ic-repeat mr-3" />
          </button>
        </div>
        <div className="flex items-center">
          <span className="block text-xs mr-2.5 opacity-50">03:50</span>
          <ProgressBar />
          <span className="block text-xs ml-2.5">05:15</span>
        </div>
      </div>
      <div className="w-1/5 flex">
        <i className="icon icon--xsmall leading-normal flex ic-volume mr-3" />
        <ProgressBar />
      </div>
    </div>
  )
}

export default Player
