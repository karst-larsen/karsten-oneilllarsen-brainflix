import AvatarBox from "../AvatarBox/AvatarBox"
import CommentInput from "../CommentInput/CommentInput"
import './CommentForm.scss'

function CommentForm() {
    return (
        <div className="comment__section">
            <AvatarBox />
            <CommentInput />
        </div>
    )
}

export default CommentForm