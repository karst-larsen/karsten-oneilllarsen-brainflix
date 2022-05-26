import './MainVideo.scss'

function MainVideo(props) {
    return (
        <div className="video">
            <video controls poster={props.src} className="video__source" >
            </video>
        </div>
    )
}

export default MainVideo