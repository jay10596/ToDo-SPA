import React, {Component} from "react";
import './Todo.css'
// Class Component
/*
    class Todo extends Component {
        constructor(props) {
            super(props)
            this.state = {
                completed: props.data.completed
            }
            this.changeCompleted = this.changeCompleted.bind(this)
        }

        render() {
            const completedStyle = {
                fontStyle: 'italic',
                color: 'gray',
                textDecoration: 'line-through'
            }

            return(
                <div>
                    <input type="checkbox" checked={this.state.completed} onChange={this.changeCompleted} />
                    <p style={this.state.completed ? completedStyle : null}>{this.props.data.title}</p>
                </div>
            )
        }

        changeCompleted() {
            this.setState({
                completed: ! this.state.completed
            })
        }
    }
*/

// Functional Component
function Todo(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: 'gray',
        textDecoration: 'line-through'
    }

    return(
        <div className='todo-design'>
            <input type="checkbox" checked={props.data.completed} onChange={() => props.changeCompleted(props.data.id)} />

            <p style={props.data.completed ? completedStyle : null}>{props.data.title}</p>

            <button onClick={() => props.deleteTodo(props.data.id)} className='delete-button'>Delete</button>

            <button onClick={() => props.editTodo(props.data)} className='edit-button'>Edit</button>
        </div>
    )
}

export default Todo