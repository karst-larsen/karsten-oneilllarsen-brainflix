import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import VideoData from './data/video-details.json'
import NextVideos from './data/videos.json'
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentCount from './components/CommentCount/CommentCount';
import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import React from 'react';
// import HandleClick from './components/HandleClick/HandleClick';



class App extends React.Component {
  state = {
    videoData: VideoData, 
    nextVideos: NextVideos,
    currentVideo: {
      id: VideoData[0]["id"],
      src: VideoData[0]["image"],
      title: VideoData[0]["title"],
      channel: VideoData[0]["channel"],
      comments: VideoData[0]["comments"],
      likes: VideoData[0]["likes"],
      views: VideoData[0]["views"],
      timestamp: VideoData[0]["timestamp"]
    }
  }

  

  handleClick = (title) => {
    this.state.videoData.forEach(video => {
      if (video.title === title) {
        let index = this.state.videoData.indexOf(video); 
        this.setState({
          currentVideo: {
            id: this.state.videoData[index]["id"],
            src: this.state.videoData[index]["image"],
            title: this.state.videoData[index]["title"],
            channel: this.state.videoData[index]["channel"],
            comments: this.state.videoData[index]["comments"],
            likes: this.state.videoData[index]["likes"],
            views: this.state.videoData[index]["views"],
            timestamp: this.state.videoData[index]["timestamp"]
          }
        })
      } 
    })
  }

  render() {
    const { videoData, nextVideos } = this.state;
    const { src, comments, title } = this.state.currentVideo

    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="video">
          <MainVideo src={src} />
          <VideoDetails videoData={this.state.currentVideo}/>
        </div>
        <div className="comments">
          <CommentCount commentData={comments} />
          <CommentForm />
          <CommentSection commentData={comments} />
        </div>
        <div className="next-section">
          <RecommendedVideos 
          currentVideo={this.state.currentVideo}
          currentVideoTitle={title}
          nextVideos={nextVideos} 
          videoData={videoData} 
          onClick={this.handleClick} 
          />
        </div>
      </div>
    );
  }
}

export default App;
