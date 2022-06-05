import Logo from "../../assets/images/Logo/BrainFlix-logo.svg"
import SearchBar from "../SearchBar/SearchBar"
import User from "../User/User"
import UploadButton from "../UploadButton/UploadButton"
import './Header.scss';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <>
            <header className="header">
            <div className="header__left-nav">
                <Link to="/"><img src={Logo} alt="Logo" className="header__logo" /></Link>
            </div>
            <div className="header__right-nav">
            <SearchBar />
            <User />
            <UploadButton />
            </div>
            </header>
            <div className={`header__upload-notification ${props.uploadSuccess ? 'header__upload-notification--success' : ''}`}><span>Upload Complete!</span></div>
        </>

    )
}

export default Header