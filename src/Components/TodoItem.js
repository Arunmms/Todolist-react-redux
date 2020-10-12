import React from 'react';

function TodoItem(props) {
    const { id,todo,upcomingTodos,setUpcomingTodos,addToCompleted,addToDeleted } = props;

    const handleCompleted = () => {
        // addToCompleted(id,upcomingTodos,setUpcomingTodos);
        addToCompleted(id);
    }

    const handleDeleted = () => {
        // addToDeleted(id,upcomingTodos,setUpcomingTodos);
        addToDeleted(id);
    }

    return (
        <li>
            <h3 style={{display:'inline'}}>{todo}</h3>
            <button onClick={handleCompleted}>Completed</button>
            <button onClick={handleDeleted}>Delete</button>
        </li>
    ) 
}

export default TodoItem;