/**
 * Dependencies
 * @ignore
 */
import { STORAGE_KEY_USER } from "../const/storageKeys.js"
import { storageSave } from "../utils/storage.js"
import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

/*
    Ensures that a translation is NOT stored in the API as just a string.
    If input translation is a string, it is returned as object instead.
*/
function checkCorrectTranslationFormat(translation) {
    console.log("typeof translation: ", typeof translation);
    if(typeof translation === "string") {
        return {
            text: translation,
            deleted: false 
        }
    } else {
        return translation;
    }
}

/**
 * Actions
 * @ignore
 */
// Add translation to user.
export const addTranslationToUser = async (user, translation) => {

    if (!user)
        return

    return await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [translation].concat(user.translations)
                            .map(checkCorrectTranslationFormat)
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Could not add translation')
        }
        return response.json()
    }).then(updatedUser => {
        console.log("Updated user with new translation")
        storageSave(STORAGE_KEY_USER, updatedUser)
        return updatedUser
    }).catch(error => {
        console.log("Error updating user with translation")
    })

}

// Remove translation from user by index.
export const removeTranslationFromUser = async (user, index) => {
    if (!user)
        return

    return await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: user.translations.map((translationElement, _index) => {
                if(_index !== index) {
                    return checkCorrectTranslationFormat(translationElement);
                }

                translationElement = checkCorrectTranslationFormat(translationElement);
                translationElement.deleted = true;
                return translationElement;
            })
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Could not remove translation')
        }
        return response.json()
    }).then(updatedUser => {
        console.log("Updated user with removed translation")
        storageSave(STORAGE_KEY_USER, updatedUser)
        return updatedUser
    }).catch(error => {
        console.log("Error updating user with removed translation")
    })
}