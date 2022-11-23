import { Component } from "react";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import VideoTimestamp from "../../utils/VideoTimestamp/VideoTimestamp";
import axios from "axios";

class UploadPage extends Component {
  //Stores form data within state allowing for a controlled form component
  state = {
    title: "",
    description: "",
    validInput: true,
    image: null,
  };

  componentDidMount() {
    //Changes title of page upon component mount
    document.title = "BrainFlix - Upload Page";
    //Retrieves a random image from static images to mimic a variety of user image uploads
    axios
      .get("https://restless-shadow-5418.fly.dev/images/images")
      .then((response) => {
        console.log(response);
        this.setState({
          image:
            response.data[Math.floor(Math.random() * response.data.length)]
              .image,
        });
      })
      .catch((error) => console.error(error));
  }

  changeInput = (event) => {
    //Stores input data within state
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Uploads the video and then pushes to main page
  uploadVideo = (e) => {
    e.preventDefault();

    //Uses randomized image held from state for upload thumbnail to post as video image if the inputs are not empty

    if (!this.state.title || !this.state.description) {
      console.log("This input should be filled");
      this.setState({
        validInput: false,
      });
      return;
    } else {
    }
    axios
      .post("https://restless-shadow-5418.fly.dev/videos", {
        title: e.target.title.value,
        description: e.target.description.value,
        timestamp: VideoTimestamp(Date.now()),
        image: this.state.image,
      })
      .then(() => {
        const {
          history: { push },
        } = this.props;
        push("/upload/uploadComplete");
      })
      .catch((error) => console.error(error));
  };

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
                {!this.state.image && <span>Loading...</span>}
                {this.state.image && (
                  <img
                    src={this.state.image}
                    alt="upload thumbnail"
                    className="upload__photo"
                  />
                )}
              </div>
              <div className="upload__inputs">
                <label htmlFor="title" className="form__label">
                  Title your video
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Add a title to your video"
                    value={this.state.title}
                    className={`form__input ${
                      this.state.validInput ? "" : "form__input--invalid"
                    }`}
                    onChange={this.changeInput}
                  />
                </label>
                <label htmlFor="description" className="form__label">
                  Add a video description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Add a description to your video"
                    value={this.state.description}
                    className={`form__input form__input--description ${
                      this.state.validInput ? "" : "form__input--invalid"
                    }`}
                    onChange={this.changeInput}
                  />
                </label>
              </div>
            </div>
            <div className="upload__button-link">
              {!this.state.validInput && (
                <span className="form__invalid">
                  Please ensure all fields are filled.
                </span>
              )}
              <button type="submit" className="button upload__button">
                Publish
              </button>
              <Link to="/" className="upload__cancel-link">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadPage;
