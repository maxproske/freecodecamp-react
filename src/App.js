import React, {Component} from 'react'
import Conditional from './Conditional'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
            {
                (this.state.isLoading) ? 
                <p>Loading...</p> :
                <Conditional />
            }
            </div>
        )
    }
}

export default App