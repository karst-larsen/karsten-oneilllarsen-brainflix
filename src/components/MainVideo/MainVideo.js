import './MainVideo.scss'

function MainVideo({ mainVideo }) {
    //Displaying placeholder and video from retrieved API
    const { image, video, id } = mainVideo;
    return (
        <div className="video">
            <video controls src={`${video}?api_key=${id}`} poster={image} className="video__source" />       
        </div>
    )
}

export default MainVideo