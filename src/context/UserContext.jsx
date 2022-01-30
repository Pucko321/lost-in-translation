/**
 * Dependencies
 * @ignore
 */
import { createContext, useContext, useState } from "react"

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
    const [ user, setUser ] = useState(null)

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