import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './UploadPage.scss'
import VideoTimestamp from '../../utils/VideoTimestamp'
import axios from 'axios';


class UploadPage extends Component {
    //Stores form data within state allowing for a controlled form component 
    state = {
        title: "",
        description: "",
        image: null
    }

    componentDidMount() {   
    //Changes title of page upon component mount
        document.title = 'BrainFlix - Upload Page'
        axios.get('http://localhost:8080/images/images')
        .then(response => {
            this.setState({
                image: response.data[Math.floor((Math.random() * response.data.length))].image
            })
        })
    }

    changeInput = (event) => {
    //Stores input data within state
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //Uploads the video and then pushes to main page
    uploadVideo = (e) => {
        e.preventDefault()
    
        axios.post('http://localhost:8080/videos', {
            title: e.target.title.value, 
            description: e.target.description.value, 
            timestamp: VideoTimestamp(Date.now()),
            image: this.state.image
        }).then(() => {
            const { history: { push } } = this.props;
            push('/upload/uploadComplete')
        })
    }

    render() {
        //Upload video section with information inputs, plus publish and cancel links
        return (
        <div className="upload">
           <h1 className="upload__title">Upload Video</h1>
           <div className="upload__desktop-wrapper">
            <form id="commentForm" className="form" onSubmit={this.uploadVideo}>
            <div className="upload__details">
                <div className="upload__thumbnail">
                    <span className="upload__thumbnail-label">Video Thumbnail</span>
                    <img src={this.state.image} alt ="upload thumbnail" className="upload__photo"/>
                </div>
                <div className="upload__inputs">    
                <label htmlFor="title" className="form__label">Title your video
                    <input type="text" 
                    name="title" 
                    placeholder="Add a title to your video" 
                    value={this.state.title} 
                    className="form__input" 
                    onChange={this.changeInput}
                    />    
                </label>
                <label htmlFor="description" className="form__label">Add a video description    
                    <textarea
                    name="description" 
                    placeholder="Add a description to your video" 
                    value={this.state.description} 
                    className="form__input form__input--description" 
                    onChange={this.changeInput}
                    />
                </label>
                </div>
            </div>
            <div className="upload__button-link">
                <button type="submit" className="button upload__button">
                        Publish
                </button>
                <Link to='/' className="upload__cancel-link" >Cancel</Link>
            </div>
            </form>
            </div>
           </div>
        );
    }
}

export default UploadPage;