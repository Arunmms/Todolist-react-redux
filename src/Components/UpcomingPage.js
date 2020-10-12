import React, { useState } from 'react';
import '../index.css';
import TodoItem from './TodoItem';

function UpcomingPage(props) {
    const todos = window.localStorage.getItem('upcoming');
    const [ upcomingTodos, setUpcomingTodos ] = useState(todos ? JSON.parse(todos) : []);

    const deleteFromUpcoming = (id) => {
        const updatedTodos = upcomingTodos.filter( todo => todo.id !== id);
        setUpcomingTodos(updatedTodos);
        window.localStorage.setItem('upcoming',JSON.stringify(updatedTodos));
    }

    const addToCompleted = (id) => {
        const completedTodo = upcomingTodos.find(todo => todo.id === id);

        deleteFromUpcoming(id);

        const completedTodos = window.localStorage.getItem('completed');
        const newTodos = completedTodos ? JSON.parse(completedTodos) : [];
        newTodos.push(completedTodo);
        window.localStorage.setItem('completed',JSON.stringify(newTodos));
    }

    const addToDeleted = (id) => {
        const deletedTodo = upcomingTodos.find(todo => todo.id === id);

        deleteFromUpcoming(id);



        const deletedTodos = window.localStorage.getItem('trash');
        const newTodos = deletedTodos ? JSON.parse(deletedTodos) : [];
        newTodos.push(deletedTodo);
        window.localStorage.setItem('trash',JSON.stringify(newTodos));
    }

    return (
      <div>
            <h1>Upcoming Task</h1>
        <div className="centre">

            <ul>
                { upcomingTodos.map(todo => {
                    return <TodoItem
                                key={todo.id}
                                todo={todo.todo}
                                id={todo.id}

                                addToCompleted={addToCompleted}

                                addToDeleted={addToDeleted}
                            />
                })}
            </ul>
        </div>
            </div>
    )
}

export default UpcomingPage;
