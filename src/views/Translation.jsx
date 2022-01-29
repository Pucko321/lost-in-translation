/**
 * Component
 * @ignore
 */
 const Translation = () => {
    return (
        <main className="Translation">
            <form>
                <div>
                    <label htmlFor="username">Translation</label>
                    <input id="username" type="text" placeholder="What do you wish to translate?" />
                </div>

                <button type="submit" className="Login">Translate</button>
            </form>

            <section className="Translated-message">
                <h2>Translation</h2>
                <div id="Translated-message">
                    Images...
                </div>
            </section>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default Translation