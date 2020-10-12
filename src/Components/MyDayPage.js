import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import TodoItem from '../Components/TodoItem';



function MyDayPage(props) {
    const [myDayTodos,setUpMyDayTodos] = useState([
        {
            id:uuidv4(),
            todo:'Walk the dog',
        },
        {
            id:uuidv4(),
            todo:'Complete Home page',
        },
        {
            id:uuidv4(),
            todo:'Watch Netflix',
        }
    ]);

    const deleteFromUpcoming = (id) => {
        const updatedTodos = myDayTodos.filter( todo => todo.id !== id);
        setUpMyDayTodos(updatedTodos);
        window.localStorage.setItem('upcoming',JSON.stringify(updatedTodos));
    }

    const addToCompleted = (id) => {
        const completedTodo = myDayTodos.find(todo => todo.id === id);
        // deleteFromUpcoming(id,upcomingTodos,setUpcomingTodos);
        deleteFromUpcoming(id);

        const completedTodos = window.localStorage.getItem('completed');
        const newTodos = completedTodos ? JSON.parse(completedTodos) : [];
        newTodos.push(completedTodo);
        window.localStorage.setItem('completed',JSON.stringify(newTodos));
    }

    const addToDeleted = (id) => {
        const deletedTodo = myDayTodos.find(todo => todo.id === id);

        deleteFromUpcoming(id);


        const deletedTodos = window.localStorage.getItem('trash');
        const newTodos = deletedTodos ? JSON.parse(deletedTodos) : [];
        newTodos.push(deletedTodo);
        window.localStorage.setItem('trash',JSON.stringify(newTodos));
    }

    return (
      <div>
        <h1>Myday</h1>
        <div className="centre">

            {myDayTodos.map( todo => {
                return (
                    <TodoItem
                    key={todo.id}
                    todo={todo.todo}
                    id={todo.id}

                    addToCompleted={addToCompleted}

                    addToDeleted={addToDeleted}
                />
                )
            })}
        </div>
          </div>
    )
}

export default MyDayPage;
