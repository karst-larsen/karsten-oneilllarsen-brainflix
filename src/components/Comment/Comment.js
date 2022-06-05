import Timestamp from "../../utils/Timestamp/Timestamp"
import AnonymousBox from "../AnonymousBox/AnonymousBox"

function Comment({ name, timestamp, comment }) {
    return (
        <div className="comment__card">
            <div className="comment__icon-box"><AnonymousBox /></div>
            <div className="comment__text-information">
                <div className="comment__banner">
                    <span className="comment__name">{name}</span>
                    <span className="comment__timestamp"><Timestamp epoch={timestamp} /></span>
                </div>
                <span className="comment__comment-content">{comment}</span>
            </div>
        </div>
    )
}

export default Comment