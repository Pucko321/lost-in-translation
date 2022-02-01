/**
 * Dependencies
 * @ignore
 */
import "../styles/Profile.css"
import HeadAppContainer from "../hoc/headAppContainer"
import NormalAppContainer from "../hoc/normalAppContainer"
import { useNavigate } from "react-router-dom"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import TranslationElement from "../components/Profile/TranslationElement"
import { removeTranslationFromUser } from "../api/translation"

/**
 * Component
 * @ignore
 */
const Profile = () => {
    const navigate = useNavigate()
    const { user, setUser } = useUser()

    const handleDeleteTranslation = async (index) => {
        const newUser = await removeTranslationFromUser(user, index)
        setUser(newUser)
    }

    return (
        <main className="Profile">
            <HeadAppContainer>
                <section className="User-info">
                    <h1 onClick={() => navigate('/')}>User Info</h1>
                    <div className="Profile-info-container">
                        <h1 className="Profile-info-label">Username:</h1>
                        <h1 className="Profile-info-value">{user && user.username}</h1>
                    </div>
                </section>
            </HeadAppContainer>

            <NormalAppContainer>
                <section className="User-translations">
                    <h1>Translations</h1>
                    <p>Translation:</p>
                    <div className="User-translation-container">
                        {user && user.translations.map((translation, index) => (
                            <TranslationElement
                                key={index}
                                text={translation}
                                onDelete={() => handleDeleteTranslation(index)}
                                onClick={() => navigate(`/translate/${translation}`)} />
                        ))}
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