import React from 'react'

function MemeGeneratorComponent(props) {
    return (
        <div>
        <form className="meme-form" onSubmit={props.handleSubmit}>
            <input
                type="text"
                placeholder="Top Text"
                name="topText"
                value={props.topText}
                onChange={props.handleChange}
            />
            <br/>
            <input
                type="text"
                placeholder="Bottom Text"
                name="bottomText"
                value={props.bottomText}
                onChange={props.handleChange}
            />
            <br/>
            <button>Generate Meme</button>
        </form>

        <div className="meme">
            <img src={props.randomImg} alt="Meme" />
            <h2>{props.topText}</h2>
            <h2>{props.bottomText}</h2>
        </div>
    </div>
    )
}

export default MemeGeneratorComponent