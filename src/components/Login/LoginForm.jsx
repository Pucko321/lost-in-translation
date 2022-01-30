/**
 * Dependencies
 * @ignore
 */
 //import { useState } from "react"
 import { useNavigate } from "react-router-dom"
 import { useForm } from "react-hook-form"
 import { loginUser } from "../../api/user"

/**
 * Component
 * @ignore
 */
const LoginForm = () => {
    const navigate = useNavigate()
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

    // hook-form
    const usernameConfig = {
        required: true,
        minLength: 1,
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onFormSubmit = async ({ username }) => {
        const [error, user] = await loginUser(username)
        console.log("Error: ", error)
        console.log("User: ", user)
        //navigate("/translate")
    }

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

                <button type="submit" className="Login">Login</button>
            </form>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default LoginForm

