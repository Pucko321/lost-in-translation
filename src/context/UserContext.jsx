/**
 * Dependencies
 * @ignore
 */
import { createContext, useContext, useEffect, useState } from "react"
import { checkForUser } from "../api/user"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageRead } from "../utils/storage"

/**
 * Context -> exposing state
 * @ignore
 */
const UserContext = createContext()

export const useUser = () => { // Create custom hook
    return useContext(UserContext) // { user, setUser }
}

/**
 * Provider -> managing state
 * @ignore
 */
const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState( storageRead( STORAGE_KEY_USER ) )

    const state = { user, setUser }

    useEffect(() => {

        // Dont check current user if null
        if (!user)
            return

        // Clear localStorage and user if the user does not exist in the API
        checkForUser(storageRead(STORAGE_KEY_USER)?.username).then(([error, user]) => {
            if (error || user.length === 0) {
                localStorage.clear()
                setUser(null)
            }
        })
    }, [user])

    return(
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    )
}

/**
 * Export
 * @ignore
 */
export default UserProvider