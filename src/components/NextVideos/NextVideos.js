import "./NextVideos.scss"
import RecommendedVideo from "../NextVideo/RecommendedVideo"

function NextVideos({ nextVideos, onClick, currentVideoTitle }) {

    return (
        <>
            <h2 className="next-videos__header">Next Videos</h2>
            <div className="next-videos">
            {nextVideos.map(videos => 
                currentVideoTitle !== videos['title'] &&
                    <RecommendedVideo 
                    key={videos.id}
                    src={videos.image} 
                    title={videos.title} 
                    channel={videos.channel}
                    onClick={onClick}
                    />
            )}
            </div>
        </>
    )
}

export default NextVideos