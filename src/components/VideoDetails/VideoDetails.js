import './VideoDetails.scss'
import Timestamp from '../Timestamp/Timestamp'
import ChannelViews from '../ChannelViews/ChannelViews'
import Author from '../Author/Author'
import Likes from '../Likes/Likes'
import VideoDescription from '../VideoDescription/VideoDescription'

function VideoDetails(props) {
    const { title, channel, timestamp, views, likes, description } = props.videoData[0]
    return (
        <>
        <div className="video__title">{title}</div>
        <div className="video__details">
            <div className="video__left-details">
                    <Author author={channel}/>
                    <Timestamp epoch={timestamp} />
            </div>
            <div className="video__right-details">
                <ChannelViews views={views} />
                <Likes likes={likes} />
            </div>
        </div>
        <div className="video__description">
            <VideoDescription content={description} />
        </div>
        </>
    )
}

export default VideoDetails