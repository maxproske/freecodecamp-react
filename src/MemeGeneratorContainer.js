import React, { Component } from 'react'
import MemeGeneratorComponent from './MemeGeneratorComponent'

class MemeGenerator extends Component {
    state = {
        topText: '',
        bottomText: '',
        randomImg: '',
        allMemeImgs: []
    }
    
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((response) => {
                const { memes } = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from submitting
        this.setState((prevState) => {
            const randomMemeImgIndex = Math.floor(Math.random() * prevState.allMemeImgs.length);
            const randomImgUrl = prevState.allMemeImgs[randomMemeImgIndex].url
            return ({
                randomImg: randomImgUrl
            })
        })
    }

    render() {
        return (
            <MemeGeneratorComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        )
    }
}

export default MemeGenerator