import '../styles/Header.css'
import { FaMoon } from 'react-icons/fa';


function Header(props) {
    return (
        <div className={["navbar",props.theme].join(' ')}>
            <div className="title">Where in the World?</div>
            <div className="theme-button" onClick={props.toogleTheme}><FaMoon/>&nbsp; Dark mode</div>
        </div>
    )
}

export default Header