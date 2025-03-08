import {useState} from 'react'

export default function About(props) {
    return (
        <div className="container my-2">
            <h1 className='my-3' style= {{color: props.mode === 'dark' ? 'White' : 'Black'}}>About Us</h1>
            Textify is a user-friendly text utility app built with React.js that helps streamline text manipulation tasks. It offers features like case conversion, text to speech, word counting, and more, enabling users to efficiently edit and process text for various needs.
        </div>
    )
}
