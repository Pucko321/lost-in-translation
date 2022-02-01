/**
 * Dependencies
 * @ignore
 */
import UserProvider from "./UserContext.jsx"

/**
 * Component
 * @ignore
 */
const AppContext = ({ children }) => {
    
    return (
        <UserProvider>
            { children }
        </UserProvider>
    )
}

/**
 * Export
 * @ignore
 */
export default AppContext