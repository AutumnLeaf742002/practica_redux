import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onChange = (e) => {

        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {

        formState,
        ...formState,
        onChange,
        onResetForm
    }
}