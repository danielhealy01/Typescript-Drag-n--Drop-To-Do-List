import './App.css';
import InputField from './components/InputField'
import { useState } from 'react'
import { Todo } from './types';

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = () => {}

    return (
        <div className="App">
            <span className='heading'>ToDo List</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />
        </div>
    );
}

export default App;
