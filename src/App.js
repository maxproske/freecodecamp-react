import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            carType: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <h1>Hi, {this.state.firstName} {this.state.lastName}</h1>
                <h2>You drive a {this.state.carType}</h2>
                <form>
                    <input 
                        onChange={this.handleChange} 
                        name="firstName" 
                        placeholder="First Name"
                        value={this.state.firstName}
                    />
                    <br />
                    <input 
                        onChange={this.handleChange} 
                        name="lastName" 
                        placeholder="Last Name"
                        value={this.state.lastName} 
                    />
                    <br />
                    <select name="carType" onChange={this.handleChange} >
                        <option value="volvo">Volvo</option>
                        <option value="bmw">BMW</option>
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default App