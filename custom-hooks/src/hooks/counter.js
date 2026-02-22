import { useState } from "react";

export function useCounter(){
    const [counter, setcounter] = useState(0);
    const inc = () => setcounter(counter + 1);
    const dec = () => setcounter(prev => prev - 1);
    const reset = () => setcounter(0);

    return {counter, inc, dec, reset};
}