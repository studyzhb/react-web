import React, { Component } from 'react';

export default class Todo extends Component {

    render() {
        const { onClick, completed, text } = this.props
        console.log(text)
        console.log('123131')
        return (
            <li onClick={onClick} style={{ textDecoration:completed? 'line-through':'none'}}>{text}
                
            </li>
        )
    }
}