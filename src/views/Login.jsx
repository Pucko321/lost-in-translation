/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/HeadAppContainer"
import NormalAppContainer from "../hoc/NormalAppContainer"
import LoginForm from "../components/Login/LoginForm.jsx"

/**
 * Component
 * @ignore
 */
const Login = () => {
    return (
        <>
            <HeadAppContainer>
                <section className="Welcome-message">
                    <h1>Lost In Translation</h1>
                    <img src={"./assets/logo/logo-hello.png"} alt="hello-logo" />
                </section>
            </HeadAppContainer>
            <NormalAppContainer>
                <LoginForm />
            </NormalAppContainer>
        </>
    )
}

/**
 * Export
 * @ignore
 */
export default Login