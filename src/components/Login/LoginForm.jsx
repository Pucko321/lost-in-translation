/**
 * Dependencies
 * @ignore
 */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user"
import { storageSave } from "../../utils/storage"
import { useUser } from "../../context/UserContext"

const usernameConfig = {
    required: true,
    minLength: 1,
}

/**
 * Component
 * @ignore
 */
const LoginForm = () => {
    /*const [ credentials, setCredentials ] = useState({
        username: "",
    })

    const onInputChange = event => {
        const { id, value } = event.target
        setCredentials({
            ...credentials,
            [id]: value
        })
    }
 */

    // Hooks
    const {register, handleSubmit, formState: { errors }} = useForm()
    const { user, setUser } = useUser()


    // Local States
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(false)
    const navigate = useNavigate()


    // Side Effects
    useEffect(() => {
        console.log(`User has changed to: ${ user }`);
        if (user) {
            navigate("/translate")
        }
    }, [ user ]) // Empty Deps - Only run 1ce


    // Event Handlers
    // Log in the user and navigate to the main page
    const onFormSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        setLoading(false)

        if (error) {
            setApiError(error)
        } else if (userResponse) {
            storageSave("user", userResponse) // "storing user with id because this is a small assignment"
            setUser(userResponse)
        }
    }


    // Render Function
    // Check if the username follows the username-requirements, if not -> show corresponding error-message
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        } else {
            switch (errors.username.type) {
                case "required":
                    return <span>Username is required</span>
                case "minLength":
                    return <span>Username is too short (min. 2 characters)</span>
                default:
                    return null
            }
        }
    })()


    return (
        <main className="Login">
            <form onSubmit={ handleSubmit(onFormSubmit) }>
                <h2>Login</h2>

                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" { ...register("username", usernameConfig) } placeholder="What's your name?" />
                    { errorMessage }
                </fieldset>

                <button type="submit" disabled={ loading } className="Login">Login</button>

                { loading  && <p>Logging in...</p> }
                { apiError  && <p>{ apiError }</p> }
            </form>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default LoginForm

