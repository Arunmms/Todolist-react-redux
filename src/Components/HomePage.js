import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './HomePage.css';


function HomePage(props) {
    const [upComingTodos,setUpComingTodos] = useState([]);
    // const [ todo,handleTodoChange,resetTodo] = useFormInput('');
    const [todo,setTodo] = useState('');

    const addTodoHandler = (newTodoVal) => {
        const newTodo = {
            id:uuidv4(),
            todo:newTodoVal
        }
        /*
            upcoming = [a,b,c]
            newcoming = [a,b,c,d]
        */
        const newUpcomingTodos = [...upComingTodos,newTodo];
        setUpComingTodos(newUpcomingTodos);
        window.localStorage.setItem('upcoming',JSON.stringify(newUpcomingTodos));
        // resetTodo();
        setTodo('');
    }

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    }

	return (
		<div className="Home">

            <div style={{margin:'20px 20px'}}>
                <input
                    type='text'
                    name='todo'
                    placeholder='Enter Todo:'
                    value={todo}
                    onChange={handleTodoChange}
                />
                <button onClick={() => addTodoHandler(todo)}>Add Todo</button>
            </div>
		</div>
	)
}

export default HomePage;
