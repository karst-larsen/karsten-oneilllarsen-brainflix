import './CommentCount.scss'

function CommentCount({ commentData }) {
    return (
        <span className="comment__count">{commentData.length} Comments</span>
    )
}

export default CommentCount