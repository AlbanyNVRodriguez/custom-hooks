import { useState } from "react";

export const useForm = (inputs = {}) => {

    const [form, setForm] = useState(inputs);

    const onChangeInput = ({ target }) =>
        setForm(current => (
            {
                ...current,
                [target.name]: target.value
            }
        ));

    const onResetForm = () => setForm(inputs);

    return {
        ...form,
        form,
        onResetForm,
        onChangeInput
    }
}
