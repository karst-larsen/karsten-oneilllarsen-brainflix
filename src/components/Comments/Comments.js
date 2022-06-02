import AvatarBox from "../AvatarBox/AvatarBox";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";
import './Comments.scss';

function Comments({ mainVideo }) {
    const { comments } = mainVideo;

    return (
        <>
            <span className="comment__count">{comments.length} Comments</span>
            <div className="comment__section">
                <AvatarBox />
                <CommentInput />
            </div>
            {comments.map((comments, index) => 
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