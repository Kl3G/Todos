import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import TodoInput from './TodoInput';
import TodoList from './ToDoList';
import FilterNav from './FilterNav';
import { useTodos } from './useTodos'

function Page({filter}) {

  console.log(filter);
  const {todos, add, toggle, remove, total} = useTodos(filter);

  return (

    <div>
      <h1>Todo</h1>
      <TodoInput onAdd={add} />
      <FilterNav total={total} />
      <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
    </div>
  )
}

export default function App() {

  const {pathname} = useLocation();
  const filter = pathname === "/active" ? "active" : pathname === "/completed" ? "completed" : "all";

  return (

    <Routes>
      <Route path="/" element={<Page filter={filter} />} />
      <Route path="/active" element={<Page filter={filter} />} />
      <Route path="/completed" element={<Page filter={filter} />} />
    </Routes>
  )
}
