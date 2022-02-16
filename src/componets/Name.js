import React from 'react'

const clicked = () => {
    console.log('I have been clicked');
}

function Name() {
    return (
        <div>

    <p>Cody Lewis</p>
    <button onClick={clicked}>Click Me</button>
    <h1>Setting Up Development Environment</h1>
        </div>
    )
}

export default Name