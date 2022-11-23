import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import VideoSection from './pages/VideoSection/VideoSection';
import UploadPage from './pages/UploadPage/UploadPage';

function App(){
      return (
        <Router>
            <Header />
            <Switch>
              <Route path='/' exact component={VideoSection} />
              <Route path='/videos/:id' component={VideoSection} />
              <Route path='/upload' exact component={UploadPage} />
              <Route path='/upload/:complete' render={(renderProps) => <VideoSection {...renderProps}/>} />
            </Switch>
        </Router>
      );
}

export default App;
