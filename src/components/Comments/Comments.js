import AvatarBox from "../AvatarBox/AvatarBox";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";
import './Comments.scss';

function Comments({ commentData }) {
    const { length } = commentData;

    return (
        <>
            <span className="comment__count">{length} Comments</span>
            <div className="comment__section">
                <AvatarBox />
                <CommentInput />
            </div>
            {commentData.map((comments, index) => 
                <Comment 
                key={index}
                name={comments.name} 
                comment={comments.comment} 
                timestamp={comments.timestamp} 
                />
            )}
        </>
    );
}

export default Comments;