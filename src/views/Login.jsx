/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/headAppContainer"
import NormalAppContainer from "../hoc/normalAppContainer"
import LoginForm from "../components/Login/LoginForm.jsx"
import WelcomeMessage from "../components/Login/WelcomeMessage"

/**
 * Component
 * @ignore
 */
const Login = () => {
    return (
        <>
            <HeadAppContainer>
                <WelcomeMessage />
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