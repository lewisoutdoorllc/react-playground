import React from 'react'

const clicked = () => {
    console.log('I have been clicked');
}

function Name() {
    return (
        <div>

    <p>Cody Lewis</p>
    <button onClick={clicked}>Click Me</button>
        </div>
    )
}

export default Name