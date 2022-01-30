const apiKey = process.env.REACT_APP_API_KEY

/**
 * Actions
 * @ignore
 */
// Needed for updating api
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        "x-api-key": apiKey,
    }
}