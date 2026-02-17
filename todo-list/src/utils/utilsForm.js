import { useRef, useState } from "react";

export function utilsForm() {
    const [todos, setTodos] = useState([])
    const [counter, setCounter] = useState(0)
    const [oneTodo, setOneTodo] = useState()
    const [posts, setPosts] = useState(null)

    const formRef = useRef(null)


    function handelSubmit(e) {
        e.preventDefault();
        addTodo();
        reset(e)

    }

    function postsMode() {
        if (posts === 'Posts') {
            setPosts('Todos')
        } else {
            setPosts('Posts')
        }
    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setOneTodo({ ...oneTodo, [name]: value });
        console.log(oneTodo)
    }
    function removeTodo(itemToRemove) {
        const newTodosList = todos.filter(todo => todo.id !== itemToRemove)
        setTodos(newTodosList)
    }

    function addTodo() {
        setTodos(todos => [...todos, { ...oneTodo, id: counter }]);
        setCounter(counter => counter + 1)
    }

    function reset(e) {
        e.preventDefault();
        setOneTodo({ title: "", priority: "Low" });
        Array.from(formRef.current.children).forEach(child => child.value = '')
    }

    return { postsMode, posts, handelSubmit, handleChange, addTodo, reset, todos, setTodos, removeTodo, oneTodo, setOneTodo, formRef }
}