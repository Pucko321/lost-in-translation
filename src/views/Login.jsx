/**
 * Dependencies
 * @ignore
 */
import HeadAppContainer from "../hoc/HeadAppContainer"
import NormalAppContainer from "../hoc/NormalAppContainer"

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
                <main className="Login">
                    <form>
                        <h2>Login</h2>

                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" placeholder="What's your name?" />
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