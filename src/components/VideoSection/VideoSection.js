import axios from 'axios'
import { Component } from 'react'
import Comments from '../Comments/Comments'
import MainVideo from '../MainVideo/MainVideo'
import NextVideos from '../NextVideos/NextVideos'
import VideoDetails from '../VideoDetails/VideoDetails'

class VideoSection extends Component {
    state = {
        currentVideo: null,
        nextVideos: []
      };

    componentDidMount() {
        const API_URL = `https://project-2-api.herokuapp.com/videos/?api_key=`;
        const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
        axios.get(`${API_URL}${API_KEY}`).then((response) => {
            this.setState({
                nextVideos: response.data,
            });
            const currentVideoId = response.data[0].id
            this.fetchMainVideo(currentVideoId)
        })
        
    }
    
    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
        const previousVideoId = prevProps.match.params.id;
        const currentVideoId = this.props.match.params.id;
        
        if (previousVideoId !== currentVideoId) {
            //Clicking the BrainFlix logo when the user has another video selected causes an undefined ID
            //This if condition covers this case by running the componentDidMount API retrieval
            if (currentVideoId === undefined) {
                const API_URL = `https://project-2-api.herokuapp.com/videos/?api_key=`;
                const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
                axios.get(`${API_URL}${API_KEY}`).then((response) => {
                    this.setState({
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
        console.log(videoId)
        const API_URL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=`;
        const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
        axios.get(`${API_URL}${API_KEY}`)
        .then(response => {
            console.log(response)
            this.setState({
                currentVideo: response.data
            }, () => document.title = `BrainFlix - ${response.data.title}`)
        })
    }

    render() {
        const { currentVideo, nextVideos } = this.state;
        return (
            <>
                <section className="video-section">
                    {!currentVideo && <span>Loading...</span>}
                    <div className="video">
                    {currentVideo && <MainVideo mainVideo={currentVideo}/>}
                    </div>
                    <div className="desktop__wrapper">
                        <section className="desktop__section-left">
                            {currentVideo && <VideoDetails mainVideo={currentVideo} />}
                            <div className="comments">
                            {currentVideo && <Comments mainVideo={currentVideo}/>}
                            </div>
                        </section>
                        <section className="next-section">
                            {currentVideo && <NextVideos 
                            mainVideo={currentVideo}
                            nextVideos={nextVideos}
                            />}
                        </section>
                    </div>
                </section>
            </>
        )
    }
}


export default VideoSection