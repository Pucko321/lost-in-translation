import { STORAGE_KEY_APP_NAME } from "../../const/storageKeys"

/**
 * Component
 * @ignore
 */
const WelcomeMessage = () => {
    return (
        <section className="Welcome-message">
            <h1>{ STORAGE_KEY_APP_NAME }</h1>
            <p>Get started</p>
            <img src={"./assets/logo/logo-hello.png"} alt="hello-logo" />
        </section>
    )
}

/**
 * Export
 * @ignore
 */
export default WelcomeMessage

