/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/HeadAppContainer"
import NormalAppContainer from "../hoc/NormalAppContainer"
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