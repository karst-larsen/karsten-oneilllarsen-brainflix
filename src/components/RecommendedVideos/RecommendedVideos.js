// import NextVideo from "../NextVideo/NextVideo"
import RecommendedVideo from "../NextVideo/RecommendedVideo"

function RecommendedVideos(props) {

    return (
        <>
        {props.nextVideos.map(videos => 
            props.currentVideoTitle !== videos['title'] &&
                <RecommendedVideo 
                key={videos['id']}
                src={videos['image']} 
                title={videos['title']} 
                channel={videos['channel']}
                onClick={props.onClick}
                />
        )}
        </>
    )
}

export default RecommendedVideos