import React from 'react'

function Conditional(props) {
    if (props.isLoading) {
       return (
           <p>I am loading...</p>
       ) 
    }
    return (
        <p>I am conditional!</p>
    )
}

export default Conditional