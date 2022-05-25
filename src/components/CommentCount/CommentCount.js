function CommentCount(props) {
    return (
        <span>{props.videoData[0]['comments'].length} Comments</span>
    )
}

export default CommentCount