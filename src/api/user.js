/**
 * Dependencies
 * @ignore
 */
import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

/**
 * See if the user exists. If user esists -> return [ null, result ], else -> return [errorMessage, [] ]
 * @param {string} username The username of user you want to check if exists
 * @returns {[Error, User]} An array containing a user object or an error
 */
export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error("Could not complete request.")
        }
        const result = await response.json()
        return  [ null, result ]
    } catch (error) {
        return [error.message, [] ]
    }
}

/**
 * Create user. If created -> return [ null, result ], else -> return [errorMessage, [] ]
 * @param {string} username The username of the account you are creating
 * @returns {[Error?, User?]} A newly created User object or an Error object
 */
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: createHeaders(),
            body: JSON.stringify({
                username: username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error("Could not create user with username " + username)
        }
        const result = await response.json()
        return  [ null, result ]
    } catch (error) {
        return [error.message, [] ]
    }
}

/**
 * Log in user. If logged in -> return [ null, user ], else -> return [errorMessage, null ]
 * @param {string} username The username of the user you want to login as
 * @returns {User} A User object
 */
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)
    
    if (checkError !== null) {
        return [checkError, null ]
    }
    
    if (user.length > 0) {
        return [ null, user.pop() ]
    }

    return await createUser(username)
}