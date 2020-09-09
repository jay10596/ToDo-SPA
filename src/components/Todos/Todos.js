import React, {Component} from "react";
import './Todos.css'
import Todo from './Todo/Todo'
import todosData from "../../TodosData";

//Functional Component (Can't add input field in it as we need to bind it with state)
/*
    function Todos() {
        const todosArray = todosData.map(Todo => <Todo data={Todo} key={Todo.id} />)

        return(
            <div>
                {todosArray}
            </div>
        )
    }
*/

//Class Component
class Todos extends Component {
    constructor() {
        super()

        this.state = {
            todos: todosData,
            inputTitle: ''
        }

        this.changeCompleted = this.changeCompleted.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    render() {
        /* We will display directly rather than using {todosArray in the return(}
            const todosArray = todosData.map(todo => <Todo data={todo} key={todo.id} changeCompleted={this.changeCompleted} />)
        */

        const todosArray = todosData.map(todo => <Todo data={todo} key={todo.id} changeCompleted={this.changeCompleted} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />)


        return(
            <div className="left-section">
                <input type="text" value={this.state.inputTitle} onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add</button>

                {todosArray}
            </div>
        )

        /* If we are not reading the data from another file, array or an object
            return(
                <div>
                    //Passing an object
                    <Todo data = {{id: 1, title: "Wake up at 6 and get ready for work.", completed: false}}/>
                    <Todo data = {{id: 2, title: "Finish laundry and take dinner.", completed: true}}/>

                    Passing a single value
                    <Todo title="Finish laundry and take dinner."/>
                </div>
            )
        */
    }

    changeCompleted(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    handleChange(e) {
        this.setState({
            inputTitle: e.target.value
        })
    }

    addTodo() {
        let newTodo = {
            id: this.state.todos.length + 2, // Adding 2 rather than 1 because if we splice, length + 1 will be equal to the id of the last element
            title: this.state.inputTitle,
            completed: false
        }

        // Can't push it directly inside the setState. It will not work properly.
        this.state.todos.push(newTodo)

        this.setState({
            todos: this.state.todos,
            inputTitle: ''
        })
    }

    deleteTodo(id) {
        this.state.todos.splice(this.state.todos.findIndex(function(todo){
            return todo.id === id
        }), 1)

        this.setState({
            todos: this.state.todos,
        })
    }

    editTodo(todo) {
        //let todo = this.state.todos.find(todo => todo.id === id)

        this.deleteTodo(todo.id)

        this.setState({
            inputTitle: todo.title,
        })
    }
}

export default Todos