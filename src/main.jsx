import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './TodoContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <TodoProvider>
      <App />
    </TodoProvider>
  </BrowserRouter>
);
