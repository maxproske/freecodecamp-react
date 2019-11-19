import React, { Component } from 'react'
import FormComponent from './FormComponent'

class Form extends Component {
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
        return (
            <FormComponent
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}

export default Form