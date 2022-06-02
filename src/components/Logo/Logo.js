import logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom'
function Logo() {
    return <Link to="/"><img src={logo} alt="Logo" className="header__logo"></img></Link>
}
export default Logo