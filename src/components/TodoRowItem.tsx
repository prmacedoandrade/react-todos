import { Todo } from '../types/todo';

interface TodoRowItemProps extends Todo {
    deleteTodo: (rowNumber: number) => void;
}

const TodoRowItem = ({ rowNumber, rowDescription, rowAssigned, deleteTodo }: TodoRowItemProps) => {
    return (
        <tr onClick={() => deleteTodo(rowNumber)}>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    );
};

export default TodoRowItem;