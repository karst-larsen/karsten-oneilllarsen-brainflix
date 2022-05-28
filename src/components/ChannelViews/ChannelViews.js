import viewsIcon from '../../assets/images/Icons/views.svg'

function ChannelViews({ views }) {
    return (
        <>
        <img src={viewsIcon} alt="views icon" />
        <span>{views}</span>
        </>
    )
}

export default ChannelViews