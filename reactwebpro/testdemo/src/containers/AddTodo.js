import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
    render() {
        let input;
        const { dispatch } = this.props
        console.log(this.props)
        return (
            < div >
                <form action="" onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    <input type="text" ref={node => { input = node }} />
                    <button type='submit'>addtodo</button>
                </form>
            </div >
        )
    }
}

let AddTodos = connect()(AddTodo)

export default AddTodos;