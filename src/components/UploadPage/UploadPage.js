import uploadPhoto from '../../assets/images/Icons/Upload-video-preview.jpg';
import './UploadPage.scss'
import { Component } from 'react'
import { Link } from 'react-router-dom'


class UploadPage extends Component {
    state = {
        title: "",
        description: "",
    }

    componentDidMount() {   
        document.title = 'BrainFlix - Upload Page'
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
    }

    render() {
        return (
        <div className="upload">
           <h1 className="upload__title">Upload Video</h1>
           <div className="upload__desktop-wrapper">
           <div className="upload__thumbnail">
               <span className="upload__thumbnail-label">Video Thumbnail</span>
               <img src={uploadPhoto} alt ="upload thumbnail" className="upload__photo"/>
            </div>    
            <form id="commentForm" className="form" onSubmit={this.props.handleSubmit}>
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