import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()

        this.state = {
            topText: 'Nice',
            bottomText: 'Meme',
            image: 'https://i.imgflip.com/1h6v4q.jpg',
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.topText}</p>
                <img src={this.state.image} />
                <p>{this.state.bottomText}</p>

                <form className="meme-form">
                    <input
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Generate Meme</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator