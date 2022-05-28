import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import videoData from './data/video-details.json'
import nextVideos from './data/videos.json'
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentCount from './components/CommentCount/CommentCount';
import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import React from 'react';
import './styles/global.scss';
import Comments from './components/Comments/Comments';
// import HandleClick from './components/HandleClick/HandleClick';



class App extends React.Component {
  state = {
    videoData,
    nextVideos,
    currentVideo: videoData[0]
  }

  handleClick = (title) => {
    this.state.videoData.forEach(video => {
      if (video.title === title) {
        let index = this.state.videoData.indexOf(video); 
        this.setState({
          currentVideo: videoData[index]
        })
      } 
    })
  }

  render() {
    const { videoData, nextVideos, currentVideo } = this.state;
    const { image, comments, title } = currentVideo;

    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="video-section">
          <MainVideo src={image} />
          <VideoDetails videoData={this.state.currentVideo}/>
        </div>
        <div className="comments">
          <Comments commentData={comments}/>
          {/* <CommentCount commentData={comments} />
          <CommentForm />
          <CommentSection commentData={comments} /> */}
        </div>
        <div className="next-section">
          <RecommendedVideos 
          currentVideo={currentVideo}
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
