/**
 * Dependencies
 * @ignore
 */
import { useForm } from "react-hook-form"
import { addTranslationToUser } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"

const messageToTranslateConfig = {
    required: true,
    minLength: 1,
}

/**
* Component
 * @ignore
 */
const TranslationForm = ({ onUpdate }) => {
    const {register, handleSubmit} = useForm()
    const {user, setUser} = useUser()

    // Event Handlers
    const onTranslateSubmit = ({ messageToTranslate }) => {
        onUpdate(messageToTranslate)
        addTranslationToUser(user, messageToTranslate)
            .then(newUser => {
                setUser(newUser)
                storageSave(STORAGE_KEY_USER, newUser)
            })
    }


    return (
        <form className="Text-form" onSubmit={ handleSubmit(onTranslateSubmit) }>
            <fieldset>
                <input className="Text-input" type="text" { ...register("messageToTranslate", messageToTranslateConfig) } placeholder="What do you wish to translate?" />
            </fieldset>
            

            <button className="Submit-btn" type="submit">{">"}</button>
        </form>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslationForm

