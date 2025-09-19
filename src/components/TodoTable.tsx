import TodoRowItem from './TodoRowItem';
import { Todo } from '../types/todo';

interface TodoTableProps {
    todos: Todo[];
    deleteTodo: (rowNumber: number) => void;
}

const TodoTable = ({ todos, deleteTodo }: TodoTableProps) => {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;