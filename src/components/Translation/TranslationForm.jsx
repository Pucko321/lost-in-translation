/**
 * Dependencies
 * @ignore
 */
 import { useForm } from "react-hook-form"

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
    // Hooks

    // Event Handlers
    const onTranslateSubmit = ({ messageToTranslate }) => {
        console.log(messageToTranslate);
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

