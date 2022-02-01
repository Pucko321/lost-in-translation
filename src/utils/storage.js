/**
 * Save JSON object to localStorage as string
 * @param {string} key The key in the localStorage object
 * @param {object} value The JSON item to save to localStorage 
 */
export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Read JSON string in localStorage and return it as a JavaScript object
 * @param {string} key The key in the localStorage object
 * @returns {object} Object read from localstorage
 */
export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }

    return null
}

/**
 * Delete an item from localStorage using a key
 * @param {string} key The key in the localStorage object
 */
export const storageDelete = key => {
    localStorage.removeItem(key)
}