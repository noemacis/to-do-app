import React, { useRef, useState } from 'react';
import './Form.css'

function Form(props: any) {


    const [task, setTask] = useState('');

    let handleSubmit = (event: any) => {
        event.preventDefault();
        props.onSubmit(task);
        setTask('');
    }

    return (

        <div className='form-div'>
            <form onSubmit={handleSubmit} className=' '>
                <div className=''>
                    <input
                        type='text'
                        className=' f-color'
                        placeholder='add new task'
                        onChange={event => setTask(event.target.value)}
                        value={task}
                        required
                    ></input>
                    <button className='bottone'> + </button>
                </div>
            </form>
        </div>

    );

}
export default Form;

