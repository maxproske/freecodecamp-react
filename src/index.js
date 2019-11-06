import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// function App() {
//     return (
//         <div>
//             <Header username="Max" />
//             <Greeting />
//         </div>
//     )
// }

class App extends Component {
    render() {
        return (
            <div>
                <Header username="Max" />
                <Greeting />
            </div>
        )
    }
}

// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}</p>
//         </header>
//     )
// }

class Header extends Component {
    render() {
        return (
            <header>
            <p>Welcome, {this.props.username}</p>
        </header>
        )
    }
}

// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay = `${hours}:00`;

//     return (
//         <p>Time of day: {timeOfDay}</p>
//     )
// }

class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay = `${hours}:00`;

        return (
            <p>Time of day: {timeOfDay}</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))