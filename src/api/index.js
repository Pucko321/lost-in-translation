const apiKey = process.env.REACT_APP_API_KEY

/**
 * Actions
 * @ignore
 */
// Create header object for fetch calls
// Needed for protected routes in the assignment API
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        "x-api-key": apiKey,
        "x-content-type-options": "nosniff"
    }
}