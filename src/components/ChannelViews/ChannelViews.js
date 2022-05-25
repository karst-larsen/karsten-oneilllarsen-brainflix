import viewsIcon from '../../assets/images/Icons/views.svg'

function ChannelViews(props) {
    return (
        <>
        <img src={viewsIcon} alt="views icon" />
        <span>{props.views}</span>
        </>
    )
}

export default ChannelViews