import { useState } from "react";

export function addStepCounter() {
    const [value, setValue] = useState({
        initialValue: 0,
        step: 1
    });

    const inc = () => setValue(prev => ({...prev, initialValue: prev.initialValue + prev.step}))
    const dec = () => setValue(prev => ({...prev, initialValue: prev.initialValue - prev.step}))
    const reset = () => setValue( prev => ({...prev, initialValue: 0}))
    const changeSteps = (e) => setValue(prev => ({...prev, step: + e.target.value}))

    return  {value, inc, dec, reset, changeSteps} 
}

