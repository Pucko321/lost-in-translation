/**
 * Dependencies
 * @ignore
 */
import '../styles/AppContainer.css';

/**
 * hoc
 * @ignore
 */
const HeadAppContainer = ({ children }) => {
    return (
        <div className="Head-app-container">{ children }</div>
    )
}

/**
 * Export
 * @ignore
 */
export default HeadAppContainer
