const Todo = ({ todo, i, deleteTodo }) => {
    return (<>
        <div className="list">
            <h3>{todo}</h3>
            <button className="btn-delete" onClick={()=>deleteTodo(i)}>x</button>
        </div>
    </>)
}

export default Todo;