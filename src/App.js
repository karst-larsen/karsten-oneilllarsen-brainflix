import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import VideoSection from './components/VideoSection/VideoSection';
import UploadPage from './components/UploadPage/UploadPage';

function App() {
  //On click, find the index of the item in the videoData array and use that index to set currentVideo
  // handleClick = (title) => {
  //   this.state.videoData.forEach(video => {
  //     if (video.title === title) {
  //       let index = this.state.videoData.indexOf(video); 
  //       this.setState({
  //         currentVideo: videoData[index]
  //       })
  //     } 
  //   })
  // }
    // const { videoData, nextVideos, currentVideo } = this.state;
    // const { image, comments, title } = currentVideo;

    return (
      <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={VideoSection} />
            <Route path='/videos/:id' component={VideoSection} />
            <Route path='/upload' component={UploadPage} />
          </Switch>
      </Router>
    );
}

export default App;
