import React, {useState} from "react"

function NewTodoForm(props){

    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');

    const submitTodo = () => {
            
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);        
            setDescription('');
            setAssigned('');
        }        

    }

    const assignedChange = (event) => {
        console.log('Assigned', event.target.value);
        setAssigned(event.target.value); //Also setting the values on the state
    }

    // const descriptionChange = (event) => {
    //     console.log('Description', event.target.value);
    //     setDescription(event.target.value); //Also setting the values on the state
    // }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                        text='text' 
                        className='form-control' 
                        required
                        value={assigned}
                        onChange={assignedChange}>    
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}>

                    </textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )


}

export default NewTodoForm