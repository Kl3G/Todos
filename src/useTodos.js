
import { useCallback, useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodos(filter = "all") {

    const { todos, dispatch } = useContext(TodoContext);

    const filterd = useMemo(() => { // 1. 기본적으로 todos 배열 전체 반환

        if(filter === "active") return todos.filter(t => !t.done);
        if(filter === "completed") return todos.filter(t => t.done);

        return todos; // 2. 여기
    }, [todos, filter]);

    const add = useCallback(text => {

        if(text.trim()) dispatch({type: "add", text});
    }, [dispatch]);

    const toggle = useCallback(id => dispatch({type: "toggle", id}), [dispatch]);
    const remove = useCallback(id => dispatch({type: "remove", id}), [dispatch]);

    return {todos: filterd, add, toggle, remove, total: todos.length};
}