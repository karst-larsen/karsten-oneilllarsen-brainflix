import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import videoData from './data/video-details.json'
import nextVideos from './data/videos.json'
import VideoDetails from './components/VideoDetails/VideoDetails';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import React from 'react';
import './styles/global.scss';
import Comments from './components/Comments/Comments';



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
        <section className="video-section">
          <MainVideo src={image} />
          <div className="desktop__wrapper">
            <section className="desktop__section-left">
              <VideoDetails videoData={this.state.currentVideo}/>
              <div className="comments">
                <Comments commentData={comments}/>
              </div>
            </section>
            <section className="next-section">
              <RecommendedVideos 
              currentVideo={currentVideo}
              currentVideoTitle={title}
              nextVideos={nextVideos} 
              videoData={videoData} 
              onClick={this.handleClick} 
              />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
