import './RecommendedVideo.scss'

function RecommendedVideo({ title, src, channel, onClick }) {
    return (
        <div className="next-video" onClick={() => onClick(title)}>
            <img src={src} alt="video preview" className="next-video__image" />
            <div className="next-video__information">
                <span className="next-video__title">{title}</span>
                <span className="next-video__channel">{channel}</span>
            </div>
        </div>
    )
}

export default RecommendedVideo