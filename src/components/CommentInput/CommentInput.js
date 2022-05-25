function CommentInput() {
    return (
        <form className="comment__form">
            <label className="comment__label"> Join The Conversation
                <textarea name="comment" className="comment__input" resize="none"></textarea>
            </label>
                <input type="submit"></input>
        </form>
    )
}

export default CommentInput