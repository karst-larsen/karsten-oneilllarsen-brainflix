// import NextVideo from "../NextVideo/NextVideo"
import RecommendedVideo from "../NextVideo/RecommendedVideo"

function RecommendedVideos(props) {


    return (
        <>
        {props.nextVideos.map((videos, index) => 
            props.currentVideo !== videos['title'] &&
                <RecommendedVideo 
                key={index}
                src={videos['image']} 
                title={videos['title']} 
                channel={videos['channel']} 
                />
        )}
        </>
    )
}

export default RecommendedVideos