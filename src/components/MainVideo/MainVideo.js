import './MainVideo.scss'

function MainVideo({ mainVideo }) {
    const { image, video, id } = mainVideo;
    return (
        <div className="video">
            <video controls src={`${video}?api_key=${id}`} poster={image} className="video__source" width='100%' />
        </div>
    )
}

export default MainVideo