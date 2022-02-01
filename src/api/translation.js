/**
 * Dependencies
 * @ignore
 */
import { STORAGE_KEY_USER } from "../const/storageKeys.js"
import { storageSave } from "../utils/storage.js"
import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

/**
 * Actions
 * @ignore
 */
// Add translation to user.
export const addTranslationToUser = async (user, translation) => {

    if (!user)
        return

    if (user.translations.some(_translation => _translation === translation))
        return user

    return await fetch(`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [translation, ...user.translations].slice(0, 10)
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
            translations: user.translations.filter( (value, _index) => _index !== index )
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