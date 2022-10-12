import { todoReducer } from "../../08.useReducer/todoReducer";
import { useEffect, useReducer } from "react";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = (initialState) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

    const handleNewTodo = todo => {
        const action = {
            type: "[TODO] add todo",
            payload: todo
        }
        dispatch(action);
    };

    const handleToggleTodo = id => {
        const action = {
            type: "[TODO] status todo",
            payload: id
        }
        dispatch(action);
    };

    const handleDeleteTodo = id => {
        const action = {
            type: "[TODO] remove todo",
            payload: id
        }
        dispatch(action);
    };

    return {
        todos,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo,
        todosCount: todos.length, 
        todosPending: todos.filter( t => t.done == false).length, 
        todosCompleted: todos.filter( t => t.done == true).length
    }
}
