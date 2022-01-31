/**
 * Dependencies
 * @ignore
 */
 import '../styles/AppContainer.css';

/**
 * hoc
 * @ignore
 */
const NormalAppContainer = ({ children }) => {
    return (
        <div className="Normal-app-container">{ children }</div>
    )
}

/**
 * Export
 * @ignore
 */
export default NormalAppContainer