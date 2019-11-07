import React, {Component} from 'react'

class App extends Component  {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const status = this.state.isLoggedIn ? "in" : "out"
        const styles = {
            color: this.state.isLoggedIn ? "green" : "red"
        }
        return (
            <div className="logged-in">
                <h1 style={styles}>{`You are currently logged ${status}`}</h1>
            </div>
        )
    }
}

export default App