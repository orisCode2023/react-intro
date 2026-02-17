import { useRef, useState } from "react";

export function utilsForm() {
    const [todos, setTodos] = useState([])
    const [oneTodo, setOneTodo] = useState({
        title: "",
        priority: 'Low'
    })

    const formRef = useRef(null)


    function handelSubmit(e) {
        e.preventDefault();
        addTodo();
        reset(e)

    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setOneTodo({ ...oneTodo, [name]: value });
    }

    function addTodo() {
        setTodos([...todos, oneTodo]);
    }

    function reset(e) {
        e.preventDefault();
        setOneTodo({ title: "", priority: "low" });
        Array.from(formRef.current.children).forEach(child => child.value = '')
    }

    return { handelSubmit, handleChange, addTodo, reset, todos, setTodos, oneTodo, setOneTodo, formRef }
}