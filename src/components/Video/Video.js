import './Video.scss'

function Video(props) {
    return (
        <div className="video">
            <video controls poster={props.videoData[0]["image"]} className="video__source" >
            </video>
        </div>
    )
}

export default Video