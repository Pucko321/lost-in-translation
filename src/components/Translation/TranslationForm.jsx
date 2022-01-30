/**
 * Component
 * @ignore
 */
const TranslationForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="username">Translation</label>
                <input id="username" type="text" placeholder="What do you wish to translate?" />
            </div>

            <button type="submit" className="Login">Translate</button>
        </form>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslationForm

