import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            destination: '',
            dietaryRestrictions: {
                isLactose: false,
                isVegan: false
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox' && name === 'dietaryRestrictions') {
            this.setState((prevState) => { 
                return {
                    [name]: {
                        ...prevState.dietaryRestrictions,
                        [value]: checked
                    }
                }
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        const nameText = (this.state.firstName || this.state.lastName) &&
            <h1>Hi, {this.state.firstName} {this.state.lastName}</h1>
        const genderText = (this.state.gender) && <p>You are {this.state.gender}</p>
        const destinationText = (this.state.destination) && <p>You want to travel to {this.state.destination}</p>

        return (
            <main>
                <form>
                    <input 
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    
                    <br />
                
                    <input 
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    
                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === 'female'}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />

                    <select
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Choose Destination --</option>
                        <option value="vancouver">Vancouver</option>
                        <option value="amsterdam">Amsterdam</option>
                        <option value="tokyo">Tokyo</option>
                    </select>

                    <br />

                    <input 
                        type="checkbox"
                        name="dietaryRestrictions"
                        value="isLactose"
                        onChange={this.handleChange}
                        defaultChecked={this.state.dietaryRestrictions.isLactose}
                    /> Lactose intolerant?

                    <br />
                    
                    <input 
                        type="checkbox"
                        name="dietaryRestrictions"
                        value="isVegan"
                        onChange={this.handleChange}
                        defaultChecked={this.state.dietaryRestrictions.isVegan}
                    /> Vegan?

                    <br />

                    <button>Submit</button>
                </form>

                <hr />

                <section>
                    {nameText}
                    {genderText}
                    {destinationText}
                </section>
            </main>
        )
    }
}

export default App