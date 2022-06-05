import './VideoDetails.scss'
import viewsIcon from '../../assets/images/Icons/views.svg'
import Timestamp from '../../utils/Timestamp/Timestamp'
import likeIcon from '../../assets/images/Icons/likes.svg'

function VideoDetails({ mainVideo }) {
    const { title, channel, timestamp, views, likes, description } = mainVideo;
    return (
        <>
        <div className="video__title">{title}</div>
        <div className="video__details">
            <div className="video__left-details">
            <span className="video__author">By {channel}</span>
            <span className="timestamp" ><Timestamp epoch={timestamp} /></span>
            </div>
            <div className="video__right-details">
                <div className="views">
                    <img src={viewsIcon} alt="views icon" className="views__icon"/>
                    <span className="views__count">{views}</span>
                </div>
                <div className="likes">
                    <img src={likeIcon} alt="like icon" className="likes__icon"/> 
                    <span className="likes__count" >{likes}</span>
                </div>
            </div>
        </div>
        <div className="video__description">
            <span className="description__content">{description}</span>
        </div>
        </>
    )
}

export default VideoDetails