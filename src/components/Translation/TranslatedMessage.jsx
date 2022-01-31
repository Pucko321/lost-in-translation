const regexCharIsInAlphabet = new RegExp(/[a-z]/);

/**
 * Component
 * @ignore
 */
 const TranslatedMessage = props => {
    const translatedListItems = Array.from(props.message.toLowerCase())
        .filter((character) => {
            return regexCharIsInAlphabet.test(character);
        })
        .map((character) => 
            {
                return {
                    "originalCharacter": character,
                    "src": "./assets/signs/" + character + ".png",
                };
            }
        );

    return (
        <section id="Translated-message-box">
            <div id="Translated-message-header">
                <h2>Translation</h2>
            </div>
            <ol id="Translated-message">
                { 
                    translatedListItems.map((translatedCharacter) => 
                    ( <li>
                        <img src={translatedCharacter.src} alt={"Handsign of the letter " + translatedCharacter.originalCharacter} />
                    </li>) 
                )}
            </ol>
        </section>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslatedMessage