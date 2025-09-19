import { ChangeEvent, useState } from 'react';

function NewTodoForm(props: {addTodo: Function}){
    
    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    };

    const assignedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAssigned(event.target.value);
    };

    const descriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={assigned}
                        onChange={assignedChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        required
                        value={description}
                        onChange={descriptionChange}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default NewTodoForm;