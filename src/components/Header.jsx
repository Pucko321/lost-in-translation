import '../styles/Header.css'
import { STORAGE_KEY_APP_NAME } from '../const/storageKeys'
import { NavLink } from 'react-router-dom'
import { useUser } from "../context/UserContext"

/**
 * Component
 * @ignore
 */
 const Header = () => {
    const { user } = useUser()

    return (
        <header className="App-header">
            {user !== null && <img src="./assets/logo/logo.png" alt="logo" />}
            <h1>{ STORAGE_KEY_APP_NAME }</h1>
            {user !== null &&
            <nav>
              <li>
                <NavLink className="App-link" to="/translate">Translate</NavLink>
              </li>
              <li>
                <NavLink className="App-link" to="/profile">Profile</NavLink>
              </li>
            </nav>}
            {user !== null && <button className="Logout-btn">Logout</button>}
        </header>
    )
}

/**
 * Export
 * @ignore
 */
export default Header