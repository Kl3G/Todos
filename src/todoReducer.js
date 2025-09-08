
export const initialState = { todos: [] };

export function todoReducer(state, action) {

    switch(action.type) {

        case "add" :
            return {

                todos: [

                    ...state.todos,
                    { id: crypto.randomUUID(), text: action.text.trim(),
                        done: false, }
                ]
            };

        case "toggle" :
            return {

                todos: state.todos.map(t => 
                    
                    t.id === action.id ? { ...t, done: !t.done} : t
                )
            };

        case "remove" :
            return { todos: state.todos.filter(t => t.id !== action.id) };

        case "hydrate" :
            return { todos: action.todos ?? [] };
            
        default:
            return state;
    }
}