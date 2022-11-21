import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">
                <h1>Todo</h1>
                <div className="input-section">
                    <input type="text" />
                    <button>Submit</button>
                </div>
                <ul>
                    <li>items</li>
                </ul>
            </div>
        );
    }
}

export default TodoApp;
