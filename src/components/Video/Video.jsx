import './Video.scss'
import vide from '../../assets/coffe.mp4'

const Video = () => {
  return (
    <div className='video'>
      <video src={vide}loop muted autoPlay></video>
    </div>
  )
}

export default Video
