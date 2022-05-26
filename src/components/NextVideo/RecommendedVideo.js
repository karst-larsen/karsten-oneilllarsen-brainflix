import './RecommendedVideo.scss'

function RecommendedVideo(props) {
    return (
        <div className="next-video" onClick={() => props.onClick(props.title)}>
            <img src={props.src} alt="video preview" className="next-video__image" />
            <div className="next-video__information">
                <span className="next-video__title">{props.title}</span>
                <span className="next-video__channel">{props.channel}</span>
            </div>
        </div>
    )
}

export default RecommendedVideo