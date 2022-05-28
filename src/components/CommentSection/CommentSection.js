import Comment from "../Comment/Comment"
import './CommentSection.scss'

function CommentSection({ commentData }) {

    return (
        <>
        {commentData.map((comments, index) => 
            <Comment 
            key={index}
            name={comments.name} 
            comment={comments.comment} 
            timestamp={comments.timestamp} 
            />
        )}
        </>
    )
}

export default CommentSection