/**
 * Dependencies
 * @ignore
 */
 import HeadAppContainer from "../hoc/headAppContainer"
 import NormalAppContainer from "../hoc/normalAppContainer"

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
            <HeadAppContainer>
                <section className="User-info">
                    <h1 onClick={() => navigate('/')}>User Info</h1>
                    <div className="Profile-info-container">
                        <p>Username:</p>
                        <p>Foo Bar</p>
                    </div>
                </section>
            </HeadAppContainer>
            
            <NormalAppContainer>
                <section className="User-translations">
                    <h1>Translations</h1>
                    <div className="User-translation-container">
                        <p>Translation:</p>
                        <p>Foo Bar</p>
                    </div>
                </section>
            </NormalAppContainer>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default Profile