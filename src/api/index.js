const apiKey = process.env.REACT_APP_API_KEY

/**
 * Actions
 * @ignore
 */
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        "x-api-key": apiKey,
    }
}