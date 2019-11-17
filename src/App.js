import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })

        fetch("https://swapi.co/api/people/1")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
    }

    render() {
        const characterName = this.state.isLoading ? "Loading..." : this.state.character.name
        return (
            <div>
                {characterName}
            </div>
        )
    }
}

export default App