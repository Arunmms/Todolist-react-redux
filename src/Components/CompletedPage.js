import React from 'react';
import {useState} from 'react';
import '../index.css';

function CompletedPage(props) {
    const todos = window.localStorage.getItem('completed');
    const completedTodos = todos ? JSON.parse(todos) : [];


    return (
        <div>
              <h1>Completed Page </h1>
        <div className="centre">

            <ul>
                { completedTodos.map( todo => {
                    return (
                        <li key={todo.id}>
                            <h3>{todo.todo}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
          </div>
    )
}

export default CompletedPage;
