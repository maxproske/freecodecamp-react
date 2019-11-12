import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.change = this.change.bind(this)
    }

    change() {
        this.setState((prevState) => {
            return { 
                count: prevState.count+1 
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.change}>Change!</button>
            </div>
        )
    }
}

export default App