import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import Card from "./Card";


export default function TodoList() {
    const { todos, removeTodo } =
        useContext(TodosContext);


    return (
        <>
            {
                todos.map((todo) =>
                (
                    <Card key={todo.id}>
                        <p>{todo.title} {todo.priority}</p>
                        <button onClick={() => removeTodo(todo.id)}>delete</button>
                    </Card>
                )
                )
            }
        </>
    )
}
