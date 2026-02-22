import { useState } from "react";

export function manageToggle(){
    const [value, setValue] = useState(true);

    const setFalse = ()=>  setValue(false);
    const setTrue = ()=>  setValue(true);
    const toggle = ()=> setValue(!value);

    return {value, setFalse, setTrue, toggle};
}
