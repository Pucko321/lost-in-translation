/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/headAppContainer"
import NormalAppContainer from "../hoc/normalAppContainer"
import { useNavigate } from "react-router-dom"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"

/**
 * Component
 * @ignore
 */
const Profile = () => {
    const navigate = useNavigate()
    const { user } = useUser()

    

    return (
        <main className="Profile">
            <HeadAppContainer>
                <section className="User-info">
                    <h1 onClick={() => navigate('/')}>User Info</h1>
                    <div className="Profile-info-container">
                        <p>Username:</p>
                        <h1>{user && user.username}</h1>
                    </div>
                </section>
            </HeadAppContainer>
            
            <NormalAppContainer>
                <section className="User-translations">
                    <h1>Translations</h1>
                    <div className="User-translation-container">
                        <p>Translation:</p>
                        <div>{user && user.translations.map((translation, index) => (
                            <h4 key={index}>{JSON.stringify(translation, null, 2)}</h4>
                        ))}</div>
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
export default withAuth(Profile)