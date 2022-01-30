/**
 * Component
 * @ignore
 */
const TranslationForm = () => {
    return (
        <form className="Translation-form">
            <div>
                {/* <label htmlFor="username">Translation</label> */}
                <input id="username" type="text" placeholder="What do you wish to translate?" />
            </div>

            <button type="submit" id="Translate-btn">></button>
        </form>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslationForm

