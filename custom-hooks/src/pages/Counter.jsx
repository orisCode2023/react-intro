import { addStepCounter } from '../hooks/stepCounter';

function Counter() {
    const { value, inc, dec, reset, changeSteps} = addStepCounter();



    return (
        <>
        <h1>Counter</h1>
        <input type="text" value={value.initialValue} readOnly/>
        <input type="text" value={value.step} onChange={changeSteps }/>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={reset}>reset</button>
        </>
    )
}

export default Counter