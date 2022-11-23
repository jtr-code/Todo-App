import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">
                <form className="input-section">
                    <h1>Todo App</h1>

                    <input type="text" placeholder="Enter the items..." />
                </form>
                <ul>
                    <li>
                        item <i className="fa-solid fa-trash-can"></i>
                    </li>
                    <li>
                        item <i className="fa-solid fa-trash-can"></i>
                    </li>
                    <li>
                        item <i className="fa-solid fa-trash-can"></i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoApp;
