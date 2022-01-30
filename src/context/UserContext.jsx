/**
 * Dependencies
 * @ignore
 */
import { createContext, useContext, useState } from "react"
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