import likeIcon from '../../assets/images/Icons/likes.svg'

function Likes({ likes }) {
    return (
        <>
            <img src={likeIcon} alt="like icon"/> 
            <span>{likes}</span>
        </>
    )
}

export default Likes