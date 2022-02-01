/**
 * Dependencies
 * @ignore
 */
import { STORAGE_KEY_USER } from "../const/storageKeys.js"
import { storageSave } from "../utils/storage.js"
import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

/**
 * Ensures that a translation is NOT stored in the API as just a string.
 * If input translation is a string, it is returned as object instead with extra field "deleted:false".
 * @param {Translation} translation The translation to check
 * @returns {Translation} Translation
 */
function checkIsObjectNotString(translation) {
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
 * Add translation to user
 * @param {User} user The user to update
 * @param {Translation} translation The translation to add
 * @returns {User} Updated user
 */
export const addTranslationToUser = async (user, translation) => {

    // Return if user is null
    if (!user)
        return

    // Return current user if duplicate translation
    if (user.translations.some(_translation => _translation === translation))
        return user

    return await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [checkIsObjectNotString(translation)].concat(user.translations)
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Could not add translation')
        }
        return response.json()
    }).then(updatedUser => {
        storageSave(STORAGE_KEY_USER, updatedUser)
        return updatedUser
    }).catch(error => {
        console.error("Error updating user with translation")
    })

}

/**
 * Remove translation from user by index. 
 * The index parameter is the index of translations that are not already deleted,
 * since a translation cant be deleted more than once.
 * @param {User} user The user to update
 * @param {number} index The index of the translation to remove
 * @returns {User} Updated user
 */
export const removeTranslationFromUser = async (user, index) => {
    if (!user)
        return

    // Keeps track of number of deleted translations before the one that should be deleted
    let indexOffset = 0;

    return await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: user.translations.map((translationElement, _index) => {
                if (translationElement.deleted === true) {
                    indexOffset++;
                } else if(_index === index + indexOffset) {
                    translationElement.deleted = true;
                } 
                return translationElement;
            })
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Could not remove translation')
        }
        return response.json()
    }).then(updatedUser => {
        storageSave(STORAGE_KEY_USER, updatedUser)
        return updatedUser
    }).catch(error => {
        console.log("Error updating user with removed translation")
    })
}