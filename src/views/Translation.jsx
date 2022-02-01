/**
 * Dependencies
 * @ignore
 */
import { useState } from "react"
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

    const [message, setMessage] = useState("");

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