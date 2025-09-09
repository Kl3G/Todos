
import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggle, onRemove}) {

    if(todos.length === 0) return <p>항목 없음</p>;

    return (

        <ul style={{paddingLeft: 16}}>
            {todos.map(t => {
                
                return <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove}/>
            })}
        </ul>
    )
}