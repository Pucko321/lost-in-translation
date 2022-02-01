/**
 * Dependencies
 * @ignore
 */
import { useState } from "react"
import { useParams } from "react-router"
import TranslatedMessage from "../components/Translation/TranslatedMessage"
import TranslationForm from "../components/Translation/TranslationForm"
import HeadAppContainer from "../hoc/headAppContainer"
import NormalAppContainer from "../hoc/normalAppContainer"
import withAuth from "../hoc/withAuth"
import '../styles/Translation.css'
import '../styles/Forms.css'


/**
 * Component
 * @ignore
 */
 const Translation = () => {

    const { pathMessage } = useParams();

    const [message, setMessage] = useState(pathMessage || "");

    return (
        <main className="Translation">
            <HeadAppContainer>
                <TranslationForm onUpdate={setMessage}/>
            </HeadAppContainer>

            <NormalAppContainer>
                <TranslatedMessage message={message}/>
            </NormalAppContainer>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default withAuth(Translation)