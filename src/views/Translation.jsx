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
 const Translation = () => {
    return (
        <main className="Translation">
            <HeadAppContainer>
                <form>
                    <div>
                        <label htmlFor="username">Translation</label>
                        <input id="username" type="text" placeholder="What do you wish to translate?" />
                    </div>

                    <button type="submit" className="Login">Translate</button>
                </form>
            </HeadAppContainer>

            <NormalAppContainer>
                <section className="Translated-message">
                    <h2>Translation</h2>
                    <div id="Translated-message">
                        Images...
                    </div>
                </section>
            </NormalAppContainer>
        </main>
    )
}

/**
 * Export
 * @ignore
 */
export default Translation