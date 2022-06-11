import axios from 'axios'
import { Component } from 'react'
import Comments from '../../components/Comments/Comments'
import MainVideo from '../../components/MainVideo/MainVideo'
import NextVideos from '../../components/NextVideos/NextVideos'
import VideoDetails from '../../components/VideoDetails/VideoDetails'

class VideoSection extends Component {
    //Initialize state prior to component mount
    state = {
        currentVideo: null,
        nextVideos: [],
        uploadSuccess: false
      };

    componentDidMount() {
    //Retrieve API for video data
    axios.get('http://localhost:8080/videos')
    .then(response => {
        this.setState( {
            nextVideos: response.data,
            uploadSuccess: this.props.match.params.complete
            });
            const currentVideoId = response.data[0].id
            this.fetchMainVideo(currentVideoId)
        })
    }
    
    componentDidUpdate(prevProps) {
    //Update the video information based on which video or link (BrainFlix logo) the user has clicked on
        window.scrollTo(0, 0)
        const previousVideoId = prevProps.match.params.id;
        const currentVideoId = this.props.match.params.id;

        //Remove the upload notification if the user clicks the BrainFlix Logo, goes to the upload page, or selects a new video
        if (this.props.match.params.complete !== prevProps.match.params.complete) {
                this.setState({
                    uploadSuccess: false
                })
        }
        
        if (previousVideoId !== currentVideoId) {
            //Clicking the BrainFlix logo when the user has another video selected causes an undefined ID
            //This if condition covers this case by running the componentDidMount initial API retrieval
            if (currentVideoId === undefined) {
                axios.get('http://localhost:8080/videos')
                .then(response => {
                    this.setState( {
                        nextVideos: response.data,
                        });
                        const currentVideoId = response.data[0].id
                        this.fetchMainVideo(currentVideoId)
                    })
                return
            }
            //If the currentVideoId is not undefined, update the currentVideo to the ID of the video that the user clicked on
            this.fetchMainVideo(currentVideoId);
        }
    }

    fetchMainVideo = (videoId) => {
        //Fetch the currentVideo to the ID of the video that the user clicked on
        axios.get(`http://localhost:8080/videos/${videoId}`)
                .then(response => {
                    this.setState( {
                        currentVideo: response.data
                        }, () => document.title = `BrainFlix - ${response.data.title}`);
                    })
    }

    //Passing down retrieved state of the current main video and next videos array to children components
    render() {
        const { currentVideo, nextVideos, uploadSuccess } = this.state;
        return (
            <>
            <div className={`header__upload-notification ${uploadSuccess === 'uploadComplete' ? 'header__upload-notification--success' : ''}`}><span>Upload Complete!</span></div>
                <section className="video-section">
                    {!currentVideo && <span>Loading...</span>}
                    {currentVideo && 
                    <>
                    <div className="video">
                        <MainVideo mainVideo={currentVideo}/>
                    </div>
                        <div className="desktop__wrapper">
                            <section className="desktop__section-left">
                                <VideoDetails mainVideo={currentVideo} />
                                <div className="comments">
                                <Comments mainVideo={currentVideo} />
                                </div>
                            </section>
                            <section className="next-section">
                                <NextVideos 
                                mainVideo={currentVideo}
                                nextVideos={nextVideos}
                                />
                            </section>
                        </div>
                    </>
                }
                </section>
            </>
        )
    }
}


export default VideoSection