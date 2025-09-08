
function TodoItem({todo, onToggle, onRemove}) {

    return (

        <li style={{ display: "flex", gap: 8, alignItems: "center"}}>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}></input>
            <span style={{textDecoration: todo.done ? "line-through" : "none"}}>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </li>
    )
}

export default React.memo(TodoItem);