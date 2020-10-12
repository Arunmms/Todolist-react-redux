import React from 'react';
import {useState} from 'react'
import '../index.css';
function TrashPage(props) {
    const todos = window.localStorage.getItem('trash');
    const deletedTodos= todos ? JSON.parse(todos) : [];

    return (
      <div>
      <h1>Trash</h1>
        <div className="centre">

            <ul>
                { deletedTodos.map( todo => {
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

export default TrashPage;
