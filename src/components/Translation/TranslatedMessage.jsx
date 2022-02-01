const regexCharIsInAlphabet = new RegExp(/[a-z ]/);

/*
    Returns whether character is lowercase from a-z.
*/
function testCharacterValid(character) {
    return regexCharIsInAlphabet.test(character);
}

// "a", " "

/*
    Returns an object with the attributes required to render each character as a list item.
*/
function characterToTranslatedObject(character, index) {
    return {
        "originalCharacter": character,
        "src": "./assets/signs/" + character + ".png",
        "key": index,
    };
}

function translatedObjectToHTML(object) {
    return (
        <li key={object.key}>
            {object.originalCharacter !== " " ? 
                <img src={object.src} alt={"Handsign of the letter " + object.originalCharacter} />
                : <div className="Translated-message-separation">-</div>}
        </li>
    );
}

function removeWhitespaceObjects(object) {
    return object.originalCharacter !== " ";
}

/**
 * Component
 * @ignore
 */
 const TranslatedMessage = props => {
    /*
        Maps the un-translated message to an array of objects
        where each object has the attributes required for rendering the sign image.
    */
    const translatedListItems = Array.from(props.message.toLowerCase())
        .filter(testCharacterValid)
        .map(characterToTranslatedObject)
        .map(translatedObjectToHTML);

    return (
        <section id="Translated-message-box">
            <div id="Translated-message-header">
                <h2>Translation</h2>
            </div>
            <ol id="Translated-message">
                { translatedListItems }
            </ol>
        </section>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslatedMessage