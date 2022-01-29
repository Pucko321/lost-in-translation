/**
 * Dependencies
 * @ignore
 */
import { useNavigate } from "react-router-dom"

/**
 * Component
 * @ignore
 */
 const Profile = () => {
     const navigate = useNavigate()

    return (
        <main className="Profile">
            <h1 onClick={() => navigate('/')}>Profile</h1>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default Profile