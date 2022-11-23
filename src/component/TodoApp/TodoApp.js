import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
    state = {
        itemValue: "",
        itemArray: [],
    };

    handleChange = (event) => {
        this.setState({
            itemValue: event.target.value,
        });
    };

    storeItems = (event) => {
        event.preventDefault();
        const { itemValue } = this.state; //destructuring
        this.setState({
            itemArray: [...this.state.itemArray, itemValue], //spread operator
            itemValue: "",
        });
    };

    deleteItem = (key) => {
        this.setState({
            itemArray: this.state.itemArray.filter(
                (data, index) => index !== key
            ),
        });
    };

    render() {
        const { itemValue, itemArray } = this.state; //destructuring
        console.log(itemArray);
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        value={itemValue}
                        onChange={this.handleChange}
                        placeholder="Enter the items..."
                    />
                </form>
                <ul>
                    {itemArray.map((data, index) => (
                        <li key={index}>
                            {data}
                            <i
                                className="fa-solid fa-trash-can"
                                onClick={() => this.deleteItem(index)}
                            ></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
