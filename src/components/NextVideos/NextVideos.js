import "./NextVideos.scss"
import { Link } from 'react-router-dom'
import RecommendedVideo from "../RecommendedVideo/RecommendedVideo"
const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e"

function NextVideos({ nextVideos, mainVideo }) {
    //Mapping over nextVideos array to display list of next videos to watch, filters out the current mainVideo from the array
    return (
        <>
            <h2 className="next-videos__header">Next Videos</h2>
            <div className="next-videos">
            {nextVideos.map(({id, image, title, channel}) => 
                mainVideo.title !== title &&
                    <Link to={`/videos/${id}?api_key=${API_KEY}`} key={id} className="link" >
                    <RecommendedVideo 
                    src={image} 
                    title={title} 
                    channel={channel}
                    />
                    </Link>
            )}
            </div>
        </>
    )
}

export default NextVideos