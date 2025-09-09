import { useState } from "react";
import { useTodos } from "./useTodos"; // 나중에 삭제하자.
// props로 받아서 사용하는 게 맞다.

export default function TodoInput({onAdd}) {

    const [text, setText] = useState("");

    const onSubmit = e => {

        e.preventDefault();
        onAdd(text); // 1. 데이터가 보내진 후.
        setText(""); // 2. input 초기화.
    };

    return(

        <form onSubmit={onSubmit}>
            <input 
                // type="text" 는 기본 타입이라 생략 가능.
                value={text} // React 대원칙 = UI은 오직 state에 의해 결정된다.
                onChange={e => setText(e.target.value)}
                placeholder="할 일을 입력..."
            />
            <button type="submit">추가</button>
        </form>
    )
}