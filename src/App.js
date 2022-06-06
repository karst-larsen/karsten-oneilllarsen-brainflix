import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import VideoSection from './pages/VideoSection/VideoSection';
import UploadPage from './pages/UploadPage/UploadPage';
import { Component } from 'react';

class App extends Component {
  //Holding uploadComplete state in App as it is the parent to both Header and the UploadPage route 
  state = {
    uploadComplete: sessionStorage.getItem.upload || false
  }

  notifyVideoUpload = (event) => {
    event.preventDefault();

    //Set the state of uploadComplete to display the upload complete message for 8 seconds before returning to uploadComplete: false
    this.setState({
      uploadComplete: true
    }, () => {
      sessionStorage.setItem("upload", this.state.uploadComplete)
      setTimeout(() => {
        this.setState({
          uploadComplete: false
        }, () => {
          sessionStorage.setItem("upload", this.state.uploadComplete)
        })
      }, 8000)
    })
  }

    //Passing down uploadSuccess state to Header and notifyVideoUpload to Upload Page button
    render() {
      return (
        <Router>
            <Header uploadSuccess={this.state.uploadComplete} />
            <Switch>
              <Route path='/' exact component={VideoSection} />
              <Route path='/videos/:id' component={VideoSection} />
              <Route path='/upload' exact render={() => <UploadPage handleClick={this.notifyVideoUpload}/>} />
            </Switch>
        </Router>
      );
    }
}

export default App;
