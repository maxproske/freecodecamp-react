import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        const displayText = (this.state.isLoggedIn) ? 'Logged in' : 'Logged out'
        const buttonText = (this.state.isLoggedIn) ? 'LOGOUT' : 'LOGIN'
        return (
            <div>
                <p>{displayText}</p>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default App