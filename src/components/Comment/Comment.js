import Timestamp from "../Timestamp/Timestamp"

function Comment(props) {
    return (
        <div className="comment__card">
            {/* <PlaceHolderAvater /> */}
            <div className="comment_banner">
                <span className="comment__name">{props.name}</span>
                <span><Timestamp epoch={props.timestamp} /></span>
            </div>
            <span className="comment__comment-content">{props.comment}</span>
        </div>
    )
}

export default Comment