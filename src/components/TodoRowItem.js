function TodoRowItem(props) {

    //THIS RETURN NEED TO BE ONLY ONE THING
    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )

}

export default TodoRowItem