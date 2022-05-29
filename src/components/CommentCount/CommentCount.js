import './CommentCount.scss'

function CommentCount({ commentData }) {
    const { length } = commentData;
    return (
        <span className="comment__count">{length} Comments</span>
    )
}

export default CommentCount