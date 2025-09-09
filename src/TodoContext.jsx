import { useEffect, useReducer, createContext } from "react";
import { todoReducer, initialState } from "./todoReducer";

export const TodoContext = createContext(null);

// 그냥 상태를 전역으로 뿌리는 것 뿐.
export function TodoProvider({children}) { // 1. 이걸 사용하면

    const [state, dispatch] = useReducer(todoReducer, initialState);

    // 초기 로드(localStorage)
    useEffect(() => {

        const raw = localStorage.getItem("todos");
        if(raw) dispatch({type: "hydrate", todos: JSON.parse(raw)});
        // JSON형태의 문자열을 JS 객체/배열로 변환.
    }, []);

    // 변경 시 저장
    useEffect(() => {

        localStorage.setItem("todos", JSON.stringify(state.todos));
        // localStorage에는 문자열만 저장할 수 있음.
    }, [state.todos]);

    const value = {todos: state.todos, dispatch}; // 2. 이걸

    return(

        <TodoContext.Provider value={value}>
            {children }{/* 3. 얘들이 사용할 수 있게 해 준다. */}
        </TodoContext.Provider>
    )
}