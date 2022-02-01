import '../styles/Header.css'
import { STORAGE_KEY_APP_NAME, STORAGE_KEY_USER } from '../const/storageKeys'
import { NavLink } from 'react-router-dom'
import { useUser } from "../context/UserContext"
import { storageDelete } from '../utils/storage'


/**
 * Component
 * @ignore
 */
 const Header = () => {
    const { user, setUser } = useUser()

    // Log out the user
    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

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
            { /* Show logout button when user is logged out */ }
            {user !== null && <button className="Logout-btn" onClick={ handleLogoutClick }>Logout</button>}
        </header>
    )
}

/**
 * Export
 * @ignore
 */
export default Header