import uploadPhoto from '../../assets/images/Icons/Upload-video-preview.jpg';
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './UploadPage.scss'


class UploadPage extends Component {
    //Stores form data within state allowing for a controlled form component 
    state = {
        title: "",
        description: "",
    }

    componentDidMount() {   
    //Changes title of page upon component mount
        document.title = 'BrainFlix - Upload Page'
    }

    changeInput = (event) => {
    //Stores input data within state
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        //Upload video section with information inputs, plus publish and cancel links
        return (
        <div className="upload">
           <h1 className="upload__title">Upload Video</h1>
           <div className="upload__desktop-wrapper">
           <div className="upload__thumbnail">
               <span className="upload__thumbnail-label">Video Thumbnail</span>
               <img src={uploadPhoto} alt ="upload thumbnail" className="upload__photo"/>
            </div>    
            <form id="commentForm" className="form" >
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
            </form>
            </div>
            <div className="upload__button-link">
                <button form="commentForm" className="button upload__button" onClick={this.props.handleClick}>
                <Link to="/" className="upload__link" >
                   Publish
                </Link>   
                </button>
                <Link to="/" className="upload__cancel-link">Cancel</Link>
            </div>
           </div>
        );
    }
}

export default UploadPage;