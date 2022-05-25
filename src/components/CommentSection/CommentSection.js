import Comment from "../Comment/Comment"

function CommentSection(props) {
    // const {timestamp} = props.videoData[0];
    // const {name, comment, timestamp} = props.videoData[0].comments[0];


    return (
        <>
        {props.videoData[0].comments.map((comments, index) => 
            <Comment 
            key={index}
            name={comments.name} 
            comment={comments.comment} 
            timestamp={comments.timestamp} />

        )}
        </>
    )
}

export default CommentSection