/**
 * Component
 * @ignore
 */
const Login = () => {
    return (
        <>
            <section className="Welcome-message">
                <h1>Lost In Translation</h1>
                <img src={"./assets/logo/logo-hello.png"} alt="hello-logo" />
            </section>
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
        </>
    )
}

/**
 * Export
 * @ignore
 */
export default Login