import AvatarBox from "../AvatarBox/AvatarBox";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";
import './Comments.scss'

function Comments({ commentData }) {

    return (
        <>
        <div>
           <span className="comment__count">{commentData.length} Comments</span>
        </div>
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