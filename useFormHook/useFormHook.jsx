import { useState } from "react";

export const useFormHook = (inputs = {}) => {

    const [simpleForm, setSimpleForm] = useState(inputs);

    const onChangeInput = ({ target }) => setSimpleForm( current => ({ ...current, [target.name]: target.value }));

    const onResetForm = () => setSimpleForm(inputs);
    
    return {
        ...simpleForm,
        simpleForm,
        onResetForm,
        onChangeInput
    }
}
