import './MainVideo.scss'

function MainVideo({ src }) {
    return (
        <div className="video">
            <video controls poster={src} className="video__source" >
            </video>
        </div>
    )
}

export default MainVideo