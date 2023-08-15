import { useState } from "react";
import Todo from "./Todo";

const Form = () => {
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([
        { todo: "todo 1" },
        { todo: "todo 2" },
        { todo: "todo 3" },
    ]);

    const handleChange = e => setTodo({ [e.target.name]: e.target.value });
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
            alert("El campo no puede estar vacío");
            return;
        }
        setTodos(prev => ([...prev, todo]))
    };

    const deleteTodo = i => {
        setTodos(prev => {
            const newTodos = [...prev];
            newTodos.splice(i, 1)
            return newTodos;
        })
    }

    return (<>
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="todo">Agregar tarea</label> <br />
            <input type="text" name="todo" onChange={handleChange} />
            <button onClick={handleClick}>Agregar</button>
        </form>
        {todos.map((val, i) => (<Todo key={val.todo} {...{ todo: val.todo, i, deleteTodo }} />))}
    </>);
}

export default Form;