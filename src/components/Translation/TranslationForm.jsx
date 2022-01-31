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
const TranslationForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {user, setUser} = useUser()
    // Hooks

    // Event Handlers
    const onTranslateSubmit = ({ messageToTranslate }) => {
        console.log(messageToTranslate);
        addTranslationToUser(user, messageToTranslate)
            .then(newUser => {
                setUser(newUser)
                storageSave(STORAGE_KEY_USER, newUser)
            })
    }


    return (
        <form className="Translation-form" onSubmit={ handleSubmit(onTranslateSubmit) }>
            <div>
                <input type="text" { ...register("messageToTranslate", messageToTranslateConfig) } placeholder="What do you wish to translate?" />
            </div>
            

            <button type="submit" id="Translate-btn">{">"}</button>
        </form>
    )
}

/**
 * Export
 * @ignore
 */
export default TranslationForm

