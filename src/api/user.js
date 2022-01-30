/**
 * Dependencies
 * @ignore
 */
import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

/**
 * Actions
 * @ignore
 */
const checkForUser = async (username) => {
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