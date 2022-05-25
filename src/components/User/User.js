import userLogo from '../../assets/images/Icons/Mohan-muruge.jpg';
import './User.scss'

function User() {
    return <img src={userLogo} alt='user icon' className="user-logo"/>
}

export default User