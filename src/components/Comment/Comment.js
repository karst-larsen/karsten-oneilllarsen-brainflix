import Timestamp from "../../utils/Timestamp/Timestamp"

function Comment({ name, timestamp, comment }) {
    //Placeholder component to display comment information
    return (
        <article className="comment__card">
            <div className="comment__icon-box">
                <div className="comment__avatar">
                    <div className="comment__anonymous-box" alt="greyed out avatar"></div>
                </div>
            </div>
            <div className="comment__text-information">
                <div className="comment__banner">
                    <span className="comment__name">{name}</span>
                    <span className="comment__timestamp"><Timestamp epoch={timestamp} /></span>
                </div>
                <span className="comment__comment-content">{comment}</span>
            </div>
        </article>
    )
}

export default Comment