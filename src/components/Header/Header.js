import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import User from "../User/User"
import UploadButton from "../UploadButton/UploadButton"
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__left-nav">
                <Logo />
            </div>
            <div className="header__right-nav">
            <SearchBar />
            <User />
            <UploadButton />
            </div>
        </header>
    )
}

export default Header