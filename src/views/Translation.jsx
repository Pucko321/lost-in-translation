/**
 * Dependencies
 * @ignore
 */
import TranslatedMessage from "../components/Translation/TranslatedMessage"
import TranslationForm from "../components/Translation/TranslationForm"
import HeadAppContainer from "../hoc/headAppContainer"
import NormalAppContainer from "../hoc/normalAppContainer"
import withAuth from "../hoc/withAuth"
import '../styles/Translation.css';

/**
 * Component
 * @ignore
 */
 const Translation = () => {
    return (
        <main className="Translation">
            <HeadAppContainer>
                <TranslationForm />
            </HeadAppContainer>

            <NormalAppContainer>
                <TranslatedMessage />
            </NormalAppContainer>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default withAuth(Translation)