import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

    render() {

        const { todos, onTodoClick } = this.props
        console.log(todos)
        return (
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                {...todo}
                                onClick={() => onTodoClick(todo.id)}
                            />
                        )
                    })
                }
            </ul>
        )
    }

}