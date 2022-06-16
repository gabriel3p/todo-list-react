import { useState, useEffect } from 'react';
import './Card.css';

export function Card (props) {

    const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem('todos')));

    function handleDeleteTodo (event, code) {
        event.preventDefault();
        
        todos.forEach((todo, index) => {
            if (todo.key == code) todos.splice(index, 1);
        });

        setTodos(todos);
        localStorage.setItem('todos', JSON.stringify(todos))

        window.location.href = "/";
    }

    return (
        <div className="card">
            <div className="card_head">
                <h2 className="title">
                    { props.name }
                </h2>

                <a href={ props.code } onClick={ event => handleDeleteTodo(event, props.code) } className="delete_btn" title="Remover tarefa">x</a>
            </div>

            <div className="card_text">
                <p>
                    { props.description }
                </p> 
            </div>
        </div>
    )
}