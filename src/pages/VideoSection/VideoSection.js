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
        nextVideos: []
      };

    componentDidMount() {
    //Retrieve API for video data
    const API_URL = `https://project-2-api.herokuapp.com/videos/?api_key=`;
    const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
    axios.get('http://localhost:8080/videos')
    .then(response => {
        this.setState( {
            nextVideos: response.data
            });
            const currentVideoId = response.data[0].id
            this.fetchMainVideo(currentVideoId)
        })
    }
    // axios.get(`${API_URL}${API_KEY}`).then((response) => {
    //     this.setState({
    //         nextVideos: response.data,
    //     });
    //     const currentVideoId = response.data[0].id
    //     this.fetchMainVideo(currentVideoId)
    //     })
    // }
    
    componentDidUpdate(prevProps) {
    //Update the video information based on which video or link (BrainFlix logo) the user has clicked on
        window.scrollTo(0, 0)
        const previousVideoId = prevProps.match.params.id;
        const currentVideoId = this.props.match.params.id;
        
        if (previousVideoId !== currentVideoId) {
            //Clicking the BrainFlix logo when the user has another video selected causes an undefined ID
            //This if condition covers this case by running the componentDidMount initial API retrieval
            if (currentVideoId === undefined) {
                // const API_URL = `https://project-2-api.herokuapp.com/videos/?api_key=`;
                // const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
                // axios.get(`${API_URL}${API_KEY}`).then((response) => {
                //     this.setState({
                //         nextVideos: response.data,
                //     });
                //     const currentVideoId = response.data[0].id
                //     this.fetchMainVideo(currentVideoId)
                // })
                axios.get('http://localhost:8080/videos')
                .then(response => {
                    this.setState( {
                        nextVideos: response.data
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
        const API_URL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=`;
        const API_KEY = "01e77bc7-e260-474d-a7f8-d01e8c44f12e";
        axios.get(`${API_URL}${API_KEY}`)
        .then(response => {
            this.setState({
                currentVideo: response.data
            }, () => document.title = `BrainFlix - ${response.data.title}`)
        })
    }

    //Passing down retrieved state of the current main video and next videos array to children components
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