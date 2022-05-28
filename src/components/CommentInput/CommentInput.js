import "./CommentInput.scss"

function CommentInput() {
    return (
        <form className="comment__form">
            <label className="comment__label"> Join The Conversation
                <textarea name="comment" className="comment__input" resize="none" rows="6" placeholder="Add a new comment"></textarea>
            </label>
                <input type="submit" className="button comment__submit"></input>
        </form>
    )
}

export default CommentInput