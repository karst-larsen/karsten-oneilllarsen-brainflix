import Logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import userLogo from '../../assets/images/Icons/Mohan-muruge.jpg';
import { Link } from 'react-router-dom'
import './Header.scss';

function Header({ uploadSuccess }) {
    return (
        <>
            <header className="header">
            <div className="header__left-nav">
                <Link to="/"><img src={Logo} alt="BrainFlix Logo" className="header__logo" /></Link>
            </div>
            <div className="header__right-nav">
                <input type="text" className="header__search-bar" placeholder="Search" />
                <img src={userLogo} alt='User Avatar' className="user-logo" />
                <Link to="/upload" className="button header__upload-button">Upload</Link>
            </div>
            </header>
            <div className={`header__upload-notification ${uploadSuccess ? 'header__upload-notification--success' : ''}`}><span>Upload Complete!</span></div>
        </>

    )
}

export default Header