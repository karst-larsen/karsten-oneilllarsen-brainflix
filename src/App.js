import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoData from './data/video-details.json'
import NextVideos from './data/videos.json'
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentCount from './components/CommentCount/CommentCount';
import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="video">
        <Video videoData={VideoData} />
        <VideoDetails videoData={VideoData}/>
      </div>
      <div className="comments">
        <CommentCount videoData={VideoData} />
        <CommentForm />
        <CommentSection videoData={VideoData} />
      </div>
      <div className="next-section">
        <RecommendedVideos currentVideo={NextVideos[0]["title"]} nextVideos={NextVideos} />
      </div>
    </div>
  );
}

export default App;
