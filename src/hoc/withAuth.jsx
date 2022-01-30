/**
 * Dependencies
 * @ignore
 */
import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

/**
 * hoc
 * @ignore
 */
// If there is a user logged in -> show page, else -> navigate to login-page
const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

/**
 * Export
 * @ignore
 */
export default withAuth