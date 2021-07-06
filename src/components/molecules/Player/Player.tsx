
import ProgressBar from './ProgressBar'

const Player = () => {
  return (
    <div className="bg-player-bg fixed w-full bottom-0 left-0 h-24 px-4 flex justify-between items-center">
      <div className="w-1/5 flex items-center">
        <div>
          <div className="w-16 h-16 border-2 border-solid rounded-full overflow-hidden">
            <img src="assets/images/icon-album.jpeg" alt="Album" />
          </div>
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
          <button type="button">
            <i className="icon icon--4xlarge flex ic-play-circle-outline mr-3" />
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
