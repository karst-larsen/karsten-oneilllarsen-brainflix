import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import VideoSection from './components/VideoSection/VideoSection';
import UploadPage from './components/UploadPage/UploadPage';
import { Component } from 'react';

class App extends Component {
  state = {
    uploadComplete: sessionStorage.getItem.upload || false
}

  uploadConfirmation = (event) => {
    event.preventDefault();
  }

  handleClick = (event) => {
    event.preventDefault();
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

    render() {
      return (
        <Router>
            <Header uploadSuccess={this.state.uploadComplete} />
            <Switch>
              <Route path='/' exact component={VideoSection} />
              <Route path='/videos/:id' component={VideoSection} />
              <Route path='/upload' exact render={() => <UploadPage handleSubmit={this.uploadConfirmation} handleClick={this.handleClick}/>} />
            </Switch>
        </Router>
      );
    }
}

export default App;
