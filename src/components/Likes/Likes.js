import likeIcon from '../../assets/images/Icons/likes.svg'

function Likes(props) {
    return (
        <>
            <img src={likeIcon} alt="like icon"/> 
            <span>{props.likes}</span>
        </>
    )
}

export default Likes