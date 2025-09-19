import { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
import { Todo } from './types/todo';

const App = () => {
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([
        { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One' },
        { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
        { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One' },
        { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }
    ]);

    const deleteTodo = (deleteTodoRowNumber: number) => {
        const filtered = todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber);
        setTodos(filtered);
    };

    const addTodo = (description: string, assigned: string) => {
        const rowNumber = todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1;

        const newTodo: Todo = {
            rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    Your Todos
                </div>
                <div className='card-body'>
                    <TodoTable todos={todos} deleteTodo={deleteTodo} />
                    <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
                        {showAddTodoForm ? 'Close New Todo' : 'New todo'}
                    </button>

                    {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
                </div>
            </div>
        </div>
    );
};

export default App;