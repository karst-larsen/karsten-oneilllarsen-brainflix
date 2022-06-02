import "./NextVideos.scss"
import { Link } from 'react-router-dom'
import RecommendedVideo from "../NextVideo/RecommendedVideo"
const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e"

function NextVideos({ nextVideos, mainVideo }) {
    return (
        <>
            <h2 className="next-videos__header">Next Videos</h2>
            <div className="next-videos">
            {nextVideos.map(videos => 
                mainVideo.title !== videos['title'] &&
                    <Link to={`/videos/${videos.id}?api_key=${API_KEY}`} key={videos.id} className="link" >
                    <RecommendedVideo 
                    src={videos.image} 
                    title={videos.title} 
                    channel={videos.channel}
                    />
                    </Link>
            )}
            </div>
        </>
    )
}

export default NextVideos