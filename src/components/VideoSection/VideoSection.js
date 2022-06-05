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
            const currentVideoId = this.props.match.params.id || response.data[0].id
            this.fetchMainVideo(currentVideoId)
        })
        
    }
    
    componentDidUpdate(prevProps) {
        const previousVideoId = prevProps.match.params.id;
        const currentVideoId = this.props.match.params.id;
        
        if (previousVideoId !== currentVideoId) {
            this.fetchMainVideo(currentVideoId);
        }
    }

    fetchMainVideo = (videoId) => {
        const API_URL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=`;
        const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
        axios.get(`${API_URL}${API_KEY}`)
        .then(response => {
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