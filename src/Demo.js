import React, {Component} from "react";

//Functional Component
/*
    function Demo(props) {
        let newStyle = {
            color: 'yellow',
            backgroundColor: 'blue', // background-color: won't work because it contains '-' and we are using JSX syntax. Therefore, replace - with camelCase
            fontSize: 20,
            margin: '25px'
        }

        const hours = new Date().getHours()

        if(hours == 12) {
            newStyle.color = 'white'
        } else if (hours > 12) {
            newStyle.color = 'black'
        }

        // Can't use style="" because everything inside return will be in JSX and it must be a object, else it will be considered as a string.
        return(
            <div style={newStyle}>
                // display can be used to check if the passed prop contains the value or not. If not, the display will be none.
                <ul style={{display: props.show ? 'block' : 'none'}}>UFC - PPV Time: {hours}
                // style={{display: !show && 'none'}} //another way of saying if show is null, display will be none.
                    <li>Nate</li>
                    <li>Conor</li>
                    <li>Jorge</li>
                </ul>
            </div>
        )
    }
*/

//Class Component
/*
    Changes to make:
        1) Change function abc() to class abc extends React.Component { ...
        2) Whatever was inside function abc() {...}, move it inside render() {...}. The render() render() works as a JSX function component.
        3) If you don't pass props as parameter, directly use this.props to access props. You can pass the props only in constructor, not in render().
        4) Add constructor() with super and this.state = {}. Here state is similar to data in Vue
        5) Bind any extra functions (if there is) in the constructor.
 */
class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            display: props.show,
            loggedIn: false,
            first: '',
            last: '',
            isFriendly: true,
            gender: '',
            favColor: ''
        }

        this.increaseCount = this.increaseCount.bind(this)
        this.hideDisplay = this.hideDisplay.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.changeLogin = this.changeLogin.bind(this)
    }

    render() {
        let newStyle = {
            color: 'yellow',
            backgroundColor: 'blue', // background-color: won't work because it contains '-' and we are using JSX syntax. Therefore, replace - with camelCase
            fontSize: 20,
            margin: '25px'
        }

        const hours = new Date().getHours()

        // Changing text color for a specific operation
        if(hours === 12) {
            newStyle.color = 'white'
        } else if (hours > 12) {
            newStyle.color = 'black'
        }

        // Conditional Statement outside JSX
        let buttonText = this.state.loggedIn ? 'Logout' : 'Log In'
        let loginMessage = this.state.loggedIn ? 'User is logged in' : 'User is logged out'

        // Can't use style="" because everything inside return will be in JSX and it must be a object, else it will be considered as a string.
        return(
            <div style={newStyle}>
                {/* display can be used to check if the passed prop contains the value or not. If not, the display will be none.
                    in the Class component, props are not passed as parameter which is why we call them using this.props */}
                <ul style={{display: this.state.display ? 'block' : 'none'}}>UFC - PPV Time: {hours}
                    {/* style={{display: !show && 'none'}} //another way of saying if show is null, display will be none. */}
                    <li>Nate</li>
                    <li>Conor</li>
                    <li>Jorge</li>
                </ul>

                <p>{this.state.count}</p>

                <button onClick={this.increaseCount}>Count</button>

                <button onClick={this.hideDisplay}>Hide Display</button>

                {/* Input Binding (name and value similar to v-model)*/}<br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange} placeholder="First name" />
                    <input type="text" name="last" value={this.state.last} onChange={this.handleChange} placeholder="Last Name "/> <br/>
                    <h4>{this.state.first} {this.state.last}</h4>

                    <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> is friendly? <br/>

                    <input type="radio" name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} /> Male
                    <input type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} /> Female
                    <h4>You are a {this.state.gender}</h4>

                    <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
                        <option value=''>Select one</option>
                        <option value="blue!">Blue</option>
                        <option value="green!">Green</option>
                        <option value="yellow!">Yellow</option>
                    </select>
                    <h4>Your fav color is {this.state.favColor}</h4>

                    {/* Button inside a form is by default a submit button in HTML5 */}
                    <button>Submit</button>
                </form>

                {/* Conditional statement (v-if) inside JSX
                    {this.state.loggedIn ?
                        <div>
                            <button onClick={this.changeLogin}>Logout</button>
                            <h1>User is logged in.</h1>
                        </div>
                        :
                        <div>
                            <button onClick={this.changeLogin}>Login</button>
                            <h1>User is logged out</h1>
                        </div>
                    }
                */}

                {/*  Conditional Statement performed outside JSX  */}
                <div>
                    <button onClick={this.changeLogin}>{buttonText}</button>
                    <h1>{loginMessage}</h1>
                </div>
            </div>
        )
    }

    increaseCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    hideDisplay() {
        this.setState({
            display: ! this.state.display
        })
    }

    handleChange(e) {
        e.target.type === 'checkbox' ?
            this.setState({[e.target.name]: e.target.checked})
            :
            this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit() {
        alert('Submitted!')
    }

    changeLogin() {
        this.setState({
            loggedIn: ! this.state.loggedIn
        })
    }
}

export default Demo