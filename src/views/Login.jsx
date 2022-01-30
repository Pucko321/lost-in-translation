/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/HeadAppContainer"
import NormalAppContainer from "../hoc/NormalAppContainer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

/**
 * Component
 * @ignore
 */
const Login = () => {
    const navigate = useNavigate()
    const [ credentials, setCredentials ] = useState({
        username: "",
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    const onFormSubmit = event => {
        event.preventDefault() // Stop page from realoading
        navigate("/translate")
    }

    return (
        <>
            <HeadAppContainer>
                <section className="Welcome-message">
                    <h1>Lost In Translation</h1>
                    <img src={"./assets/logo/logo-hello.png"} alt="hello-logo" />
                </section>
            </HeadAppContainer>
            <NormalAppContainer>
                <main className="Login">
                    <form onSubmit={ onFormSubmit }>
                        <h2>Login</h2>

                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" placeholder="What's your name?" onChange={ onInputChange } />
                        </div>

                        <button type="submit" className="Login">Login</button>
                    </form>
                </main>
            </NormalAppContainer>
        </>
    )
}

/**
 * Export
 * @ignore
 */
export default Login