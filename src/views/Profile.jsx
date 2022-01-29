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
            <section className="User-info">
                <h1 onClick={() => navigate('/')}>User Info</h1>
                <div className="Profile-info-container">
                    <p>Username:</p>
                    <p>Foo Bar</p>
                </div>
            </section>
            
            <section className="User-translations">
                <h1>Translations</h1>
                <div className="User-translation-container">
                    <p>Translation:</p>
                    <p>Foo Bar</p>
                </div>
                
            </section>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default Profile