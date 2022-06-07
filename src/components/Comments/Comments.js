import Comment from "../Comment/Comment";
import userLogo from '../../assets/images/Icons/Mohan-muruge.jpg';
import './Comments.scss';

function Comments({ mainVideo }) {
    //Displaying comment length information plus form for comment input
    const { comments } = mainVideo;
    const { length } = comments;

    return (
        <>
            <span className="comment__count">{length} Comments</span>
            <div className="comment__section">
                <div className="comment__avatar">
                    <img src={userLogo} alt='User Avatar' className="user-logo" />
                </div>
                <form className="comment__form">
                    <label className="comment__label"> Join The Conversation
                        <textarea name="comment" className="comment__input" resize="none" rows="4" placeholder="Add a new comment"></textarea>
                    </label>
                        <input type="submit" className="button comment__submit" value="COMMENT" disabled />
                </form>
            </div>
            {/* Mapping over mainVideo.comments to display API retrieved comments */}
            {comments.map(({ name, comment, timestamp}, index) => 
                <Comment 
                key={index}
                name={name} 
                comment={comment} 
                timestamp={timestamp} 
                />
            )}
        </>
    );
}

export default Comments;